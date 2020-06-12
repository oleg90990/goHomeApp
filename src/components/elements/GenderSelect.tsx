import React from 'react';
import { Picker} from 'native-base';

import { connect } from 'react-redux';
import { IState } from '../../store/types';
import { getAnimalById } from '../../store/dictionaries/getters';
import { IDictionaryAnimalType } from '../../store/dictionaries';
import { Gender } from '../../enum/Form';

interface IGenderSelectProps  {
  onChange: (value: Gender) => void,
  value?: Gender,
  animal?: number,
  getAnimalById: (animalId: number) => IDictionaryAnimalType | undefined
}

const GenderSelect: React.FC<IGenderSelectProps> = ({ onChange, value, animal, getAnimalById }) => {
    const animalSelected = animal ? getAnimalById(animal) : undefined;
    const genders = animalSelected ? animalSelected.genders : undefined;

    return (genders ? 
        <Picker note mode="dropdown" selectedValue={value} onValueChange={onChange} >
            <Picker.Item key={Gender.male} label={genders[Gender.male]} value={Gender.male} />
            <Picker.Item key={Gender.female} label={genders[Gender.female]} value={Gender.female} />
            <Picker.Item key={Gender.none} label={genders[Gender.none]} value={Gender.none} />
        </Picker> : null
    );
};

const mapStateToProps = (state: IState) => {
    return { getAnimalById: getAnimalById(state) };
};

export default connect(mapStateToProps, {})(GenderSelect);