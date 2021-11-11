import React from 'react';
import s from './filterForm.module.css'


const FilterForm = (props) => {

    const handleChangeKind = event => {
        props.setKindSort(event.target.value)
        event.preventDefault()


    }
    const handleChangeType = event => {
        props.setTypeSort(event.target.value)
        event.preventDefault()


    }

    const handleSubmit = event => {
        props.Sort()
        event.preventDefault()


    }

    return (
        <div className={s.filter_form}>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.form_select}>

                    <div>
                        <label>Sort by: </label>
                        <select className={s.select1} onChange={handleChangeKind}>
                            <option value='price'>price</option>
                            <option value='volume'>volume</option>
                        </select>
                    </div>
                    <select className={s.select1} onChange={handleChangeType}>
                        <option value="desc">descending</option>
                        <option value="asc">ascending</option>

                    </select>
                </div>
                <div>
                    <input className={s.submit} type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};

export default FilterForm;
