import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
{
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
transform(value: string, limit?: any) {
    if (value == null) {
        return null;
    }
    let lim = (limit) ? limit : 50;
    return value.substr(0, lim) + '....';
}
}
