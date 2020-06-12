import React from 'react';
import { Picker} from 'native-base';
import { YesNo } from '../../enum/Form';

interface ISterilizationCastrationSelectProps  {
  onChange: (value: YesNo) => void,
  value?: YesNo
}

const SterilizationCastrationSelect: React.FC<ISterilizationCastrationSelectProps> = ({ onChange, value }) => {
    return (<Picker style={{width: '100%'}} mode="dropdown" selectedValue={value} onValueChange={(onChange)} >
            <Picker.Item key={YesNo.yes} label={'Да'} value={YesNo.yes} />
            <Picker.Item key={YesNo.no} label={'Нет'} value={YesNo.no} />
            <Picker.Item key={YesNo.none} label={'Не выбрано'} value={YesNo.none} />
        </Picker>);
};
export default SterilizationCastrationSelect;