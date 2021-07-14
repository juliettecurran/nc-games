import React from 'react';
import '../Filter/filter.css';

const Filter = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div id='filter-panel' className='collapse filter-panel'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <form className='form-inline'>
                  <div className='form-group'>
                    <label
                      className='filter-col'
                      style={{ marginRight: 0 }}
                      for='pref-orderby'
                    >
                      Sort by:
                    </label>
                    <select id='pref-orderby' className='form-control'>
                      <option>Author</option>
                      <option>Comments</option>
                      <option>Votes</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label
                      className='filter-col'
                      style={{ marginRight: 0 }}
                      for='pref-orderby'
                    >
                      Order by:
                    </label>
                    <select id='pref-orderby' className='form-control'>
                      <option>Ascending</option>
                      <option>Descending</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='collapse'
            data-target='#filter-panel'
          >
            <span className='glyphicon glyphicon-cog'></span> Filter Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
