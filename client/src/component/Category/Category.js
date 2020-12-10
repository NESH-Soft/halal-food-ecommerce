import React, { useState, useEffect } from 'react';
import TreeMenu from 'react-simple-tree-menu';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../redux/actions/categoryAction';
import { getProductsByCategory } from '../../redux/actions/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortAmountDown, } from '@fortawesome/free-solid-svg-icons'
import './Category.css';
import { withRouter } from 'react-router-dom';
const Category = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
        // eslint-disable-next-line
    }, [])

    const category = useSelector((state) => state.categoryState.category);
    const data = category || [];
    const [categoryClass, setCategoryClass] = useState('categoryShow');

    const calCulData = data.map(item => (
        {
            key: item.name,
            label: item.name,
            nodes:
                item.subCategory ? item.subCategory.map(i => ({
                    key: i.name,
                    label: i.name,
                }
                )) : []
            ,
        }
    ))
    //category dropdown system
    const hangleCategory = () => {
        if (categoryClass === 'categoryShow') {
            setCategoryClass('categoryHide');
        }
        if (categoryClass === 'categoryHide') {
            setCategoryClass('categoryShow');
        }
    }
    return (
        <div className="hero-categories">
            <div className="hero-categories-title">
                <div className="d-flex justify-content-between py-2" onClick={hangleCategory}>
                    <div>
                        <FontAwesomeIcon icon={faBars} />
                        <span className="ml-3">All Categories</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSortAmountDown} />
                    </div>
                </div>
            </div>
            <div className={`${categoryClass}`}>
                <TreeMenu
                    cacheSearch
                    data={calCulData}
                    debounceTime={125}
                    disableKeyboard={false}
                    hasNodes={true}
                    //   hasSearch={false}
                    onClickItem={(i) => {
                        // console.log(i);
                        dispatch(getProductsByCategory(i))
                        props.history.push('/shop')
                    }}
                    resetOpenNodesOnDataUpdate={false}
                />
            </div>
        </div>
    );
};

export default withRouter(Category);