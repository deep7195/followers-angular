import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
    name: 'casecorrect'
})

export class CaseCorrect implements PipeTransform {
    transform(value: string, args?) {

        if (value == null) {
            return null;
        }
        const splitStr: string[] = value.split(' ' );
        for ( let i = 0; i < splitStr.length; i++) {
            if (i != 0 && this.CheckIsPreposotion(splitStr[i])) {
                splitStr[i] = splitStr[i].toLowerCase();
            } else {
                splitStr[i] = this.ConvertTitleCase(splitStr[i]);
            }
        }
        return splitStr.join(' ');
    }

    private CheckIsPreposotion(word: string): boolean {
        const prepos: string[] = ['OF', 'THE'];
        return prepos.includes(word.toUpperCase());
    }
    private ConvertTitleCase(word: string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }

}
