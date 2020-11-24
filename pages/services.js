import { useEffect } from 'react'
import ServiceTableRow from '../components/serviceTableRow'

export async function getServerSideProps(context){
    const res = await fetch(`https://f75sppsh3l.execute-api.eu-west-2.amazonaws.com/dev/services`)
    const data = await res.json();

    if(!data){
        return {
            notFound: true,
        }
    }

    return { props: { data } }
    
}

export default function Services({ data }) {
    
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
                    <div class="govuk-grid-column-two-thirds">{/* Search start */}
                        <div class="govuk-grid-row">
                            <div class="govuk-form-group">
                                <div class="govuk-grid-column-three-quarters">
                                    <input class="govuk-input govuk-input" id="search-input" name="search-input" type="text" placeholder="keyword" />
                                </div>
                                <div class="govuk-grid-column-one-quarter">
                                    <button class="govuk-button govuk-button--secondary" data-module="govuk-button">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>{/* Search end */}
                    <div class="govuk-grid-column-one-third">
                        <a href="#" class="govuk-link">Add a new service</a>
                    </div>
                </div>
                

                <div class="govuk-grid-row">{/* Table  Start*/}
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
                            {data.Items.map((data) => (
                                <ServiceTableRow data = { data } /> 
                                ))}
                        </tbody>
                    </table>
                </div>{/* Table End */}
            </div> {/* Wrapper End */}
        </div>
        )
    }

    