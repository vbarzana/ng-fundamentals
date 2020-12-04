import {FormControl, ValidatorFn} from '@angular/forms';

export function restrictedWords(words: string[]): ValidatorFn {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) {
            return null;
        }
        const invalidWords = words.filter(word => control.value.includes(word));
        return invalidWords.length
            ? {'restrictedWords': invalidWords.join(', ')}
            : null;
    };
}
