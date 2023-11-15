export interface DigitalUnit {
    Unit: string;
    ShortCode: string;
    Order: number;
    BitUnit: number;
    CurVal: number;
}

export interface DigitalUnits extends Array<DigitalUnit> { }