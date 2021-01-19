/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import projectData from './projectData';
import $ from 'jquery';
import './css/ContentFilter.css';
import './css/style.css';

function ContentFilter() {
    
    const [list, setList] = useState(projectData);

    // Filter projects
    const filterProjectList = event => {

        if (window.screen.width < 768) {
            // Reset all dynamically applied styles
            document.querySelector('.all').style.color = 'blue';
            document.querySelector('.major').style.color = 'blue';
            document.querySelector('.minor').style.color = 'blue';
            
            document.querySelector('.all').style.boxShadow = 'none';
            document.querySelector('.major').style.boxShadow = 'none';
            document.querySelector('.minor').style.boxShadow = 'none';

            // Set delected tab's colour to white
            // document.querySelector(`.${event.target.className}`).style.color = 'white';

            //mobile version - detect click event on filters tab
            let filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
            filter_tab_placeholder_default_value = 'Select',
            filter_tab_placeholder_text = filter_tab_placeholder.text();

            //detect which tab filter item was selected
            let selected_filter = $(event.target).data('type');
              
            //check if user has clicked the placeholder item
            if( $(event.target).is(filter_tab_placeholder) ) {
                (filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
                $('.cd-tab-filter').toggleClass('is-open');
  
            //check if user has clicked a filter already selected 
            } else if( filter_tab_placeholder.data('type') == selected_filter ) {
                filter_tab_placeholder.text($(event.target).text());
                $('.cd-tab-filter').removeClass('is-open');	
  
            } else {
                //close the dropdown and change placeholder text/data-type value
                $('.cd-tab-filter').removeClass('is-open');
                filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
                filter_tab_placeholder_text = $(event.target).text();
                
                //add class selected to the selected filter item
                $('.cd-tab-filter .selected').removeClass('selected');
                $(event.target).addClass('selected');
            }
        }

        // Need to use .includes instead of === as 'selected' class is being dynamically added to list items in screens under 768px
        if (event.target.className.includes("all")) {
            // Apply these styles only on screens wider than 768 pixels
            if (window.screen.width >= 768) {
                document.querySelector('.all').style.color = 'blue';
                document.querySelector('.major').style.color = 'white';
                document.querySelector('.minor').style.color = 'white';
                
                document.querySelector('.all').style.boxShadow = 'inset 0 -2px 0 #41307c';
                document.querySelector('.major').style.boxShadow = 'none';
                document.querySelector('.minor').style.boxShadow = 'none';
            }

            const allProjects = projectData.filter(info => info.className === 'color-1' || 'color-2')
            setList(allProjects);

        } else if (event.target.className.includes("major")) {

            if (window.screen.width >= 768) {
                document.querySelector('.all').style.color = 'white';
                document.querySelector('.major').style.color = 'blue';
                document.querySelector('.minor').style.color = 'white';
                
                document.querySelector('.all').style.boxShadow = 'none';
                document.querySelector('.major').style.boxShadow = 'inset 0 -2px 0 #41307c';
                document.querySelector('.minor').style.boxShadow = 'none';
            }
            
            const majorProjects = projectData.filter(info => info.className === 'color-1')
            setList(majorProjects);

        } else if (event.target.className.includes("minor")) {
            if (window.screen.width >= 768) {
                document.querySelector('.all').style.color = 'white';
                document.querySelector('.major').style.color = 'white';
                document.querySelector('.minor').style.color = 'blue';
    
                document.querySelector('.all').style.boxShadow = 'none';
                document.querySelector('.major').style.boxShadow = 'none';
                document.querySelector('.minor').style.boxShadow = 'inset 0 -2px 0 #41307c';
            }

            const minorProjects = projectData.filter(info => info.className === 'color-2')
            setList(minorProjects);
        }
    }

        return (

            <div className="container-sm portfolio-all">
                <div className="row">
                    <div className="col-sm-12 portfolio-col bottom">
                        <main className="cd-main-content">
                            <div className="cd-tab-filter-wrapper">
                                <div className="cd-tab-filter">
                                    <ul className="cd-filters">
                                        <li className="placeholder"> 
                                            <a data-type="all" href="#all" onClick={filterProjectList}>All</a> {/* selected option on mobile */}
                                        </li> 
                                        <li className="filter"><a href="#all" className={["all selected"]} data-type="all" onClick={filterProjectList}>All</a></li>
                                        <li className="filter"><a href="#major" className="major" data-type="color-1" onClick={filterProjectList}>Major</a></li>
                                        <li className="filter"><a href="#minor" className="minor" data-type="color-2" onClick={filterProjectList}>Minor</a></li>
                                    </ul> {/* cd-filters */}
                                </div> {/* cd-tab-filter */}
                        </div> {/* cd-tab-filter-wrapper */}
                            <section className="cd-gallery">
                                <ul className="projectList">
                                    {list.map(info => {
                                        return <ProjectList key={info.id} data={info}></ProjectList>
                                    })}
                                    <li className="gap" />
                                    <li className="gap" />
                                    <li className="gap" />
                                </ul>
                                <div className="cd-fail-message">No results found</div>
                            </section>
                        </main> {/* cd-main-content */}
                    </div>
                </div>
            </div>

        )
    }


export default ContentFilter;