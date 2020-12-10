const events = require('../database/events');
const getNextId = require('./getNextId');
let nextId = getNextId(events);
exports.getEvents = function (req, res) {
    res.send(events);
}
exports.getEvent = function (req, res) {
    const event = events.find(event => event.id === +req.params.eventId);
    res.send(event);
}
exports.searchSessions = function (req, res) {
    const term = req.query.search.toLowerCase();
    let results = [];
    events.forEach(event => {
        const matchingSessions =
            event.sessions.filter(session => session.name.toLowerCase().indexOf(term) > -1)
                .map(session => {
                    session.eventId = event.id;
                    return session;
                })
        results = results.concat(matchingSessions);
    })
    res.send(results);
}
exports.deleteVoter = function (req, res) {
    const voterId = req.params.voterId,
        sessionId = parseInt(req.params.sessionId),
        eventId = parseInt(req.params.eventId);
    const session = events.find(event => event.id === eventId)
        .sessions.find(session => session.id === sessionId)
    session.voters = session.voters.filter(voter => voter !== voterId);
    res.send(session);
}
exports.addVoter = function (req, res) {
    const voterId = req.params.voterId,
        sessionId = parseInt(req.params.sessionId),
        eventId = parseInt(req.params.eventId);
    const event = events.find(event => event.id === eventId)
    const session = event.sessions.find(session => session.id === sessionId)
    session.voters.push(voterId);
    res.send(session);
}
exports.saveEvent = function (req, res) {
    const event = req.body;
    if (event.id) {
        const index = events.findIndex(e => e.id === event.id)
        events[index] = event
    } else {
        event.id = nextId;
        nextId++;
        event.sessions = [];
        events.push(event);
    }
    res.send(event);
    res.end();
}


