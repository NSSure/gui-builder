import TokenType from '../enums/TokenType';
import ValueRestrictionType from '../enums/ValueRestrictionType';

export default class SectionToken {
    id: string;
    sectionId: string;
    name: string;
    tokenType: TokenType;
    valueRestrictionType: ValueRestrictionType = ValueRestrictionType.None;
    values?: Array<string>;
    valuesJson: string;
}
