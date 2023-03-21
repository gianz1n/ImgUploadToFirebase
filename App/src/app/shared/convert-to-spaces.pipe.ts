import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'TrustHTMLPipe',
        pure: true })

export class TrustHTMLPipe implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}