export class FavoriteChangeEvent {
    isChangeValue: boolean;

    public get IsChangeValue(): boolean {
        return this.isChangeValue;
    }
    public set IsChangeValue(value: boolean) {
        this.isChangeValue = value;
    }

}
