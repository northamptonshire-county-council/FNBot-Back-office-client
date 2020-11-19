import { useEffect } from 'react'

export default function Places() {
    
    //Example from: https://www.codegrepper.com/code-examples/delphi/next+js+componentdidmount+functional+component
    // replicates functionality of React's 'component did mount'
    useEffect(() => {
        window.GOVUKFrontend.initAll()
    }, []);
    
    return (
        <div class="govuk-width-container">
        <div id="govuk-main-wrapper--auto-spacing">
            
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-full">
                    <h1 class="govuk-heading-xl">Services</h1>
                </div>
            </div>


            <div class="govuk-grid-row">
                <div class="govuk-grid-column-two-thirds">
                {/* Search start */}
                <div class="govuk-form-group">
                {/* <label class="govuk-label govuk-label--l" for="event-name" aria-hidden="hidden" style="display: none">Keyword</label> */}
                    <input class="govuk-input govuk-input--width-10" id="search-input" name="search-input" type="text" placeholder="keyword" />
                    <button class="govuk-button govuk-button--secondary" data-module="govuk-button">Search</button>
                </div>
                </div>
                {/* Search end */}
                <div class="govuk-grid-column-one-third">
                <a href="#" class="govuk-link">Add a new service</a>
                </div>
            </div>
            

            <div class="govuk-grid-row">
            {/* Table  Start*/}
            <table class="govuk-table">
                <caption class="govuk-table__caption">Services</caption>
                <thead class="govuk-table__head">
                    <tr class="govuk-table__row">
                        <th scope="col" class="govuk-table__header">Service name</th>
                        <th scope="col" class="govuk-table__header">Is County</th>
                        <th scope="col" class="govuk-table__header">Synonyms</th>
                        <th scope="col" class="govuk-table__header"></th>
                    </tr>
                </thead>
                <tbody class="govuk-table__body">
                    <tr class="govuk-table__row">
                        <td scope="row" class="govuk-table__cell">Household waste and recycling</td>
                        <td class="govuk-table__cell">True</td>
                        <td class="govuk-table__cell">Rubbish, Tip, Waste</td>
                        <td class="govuk-table__cell"><a href="#" class="govuk-link">Edit</a></td>
                    </tr>
                </tbody>
            </table>
            {/* Table End */}

            </div>
        </div> {/* Wrapper End */}
        </div>
        )
    }