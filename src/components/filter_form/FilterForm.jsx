import React from 'react';
import s from './filterForm.module.css'

const FilterForm = () => {
    return (
        <div className={s.filter_form}>
            <form className={s.form} action="">
                <div className={s.form_select}>
                    <div>
                        <label>Sort by: </label>
                        <select className={s.select1} id="">
                            <option value="">price</option>
                            <option value="">volume</option>
                        </select>
                    </div>
                    <select className={s.select1} id="">
                        <option value="">descending</option>
                        <option value="">ascending</option>

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
