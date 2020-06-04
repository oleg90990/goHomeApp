import { Animal, Color } from '../../enum/Form';
import { IAgeWidgetvalue } from '../../components/widgets/AgeWidget';

export interface IItemsProps {
    animal: Animal,
    ages: IAgeWidgetvalue,
    colors: Color[]
}