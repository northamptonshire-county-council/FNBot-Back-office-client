import { useEffect } from 'react'

export default function Places() {

    //Example from: https://www.codegrepper.com/code-examples/delphi/next+js+componentdidmount+functional+component
    // replicates functionality of React's 'component did mount'
    useEffect(() => {
        window.GOVUKFrontend.initAll()
    }, []);

    return (
        <main>
            <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
            <div className="govuk-accordion__section ">
                <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                    Writing well for the web
                    </span>
                </h2>
                </div>
                <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                <p className='govuk-body'>This is the content for Writing well for the web.</p>
                </div>
            </div>
            <div className="govuk-accordion__section ">
                <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-2">
                    Writing well for specialists
                    </span>
                </h2>
                </div>
                <div id="accordion-default-content-2" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-2">
                <p className='govuk-body'>This is the content for Writing well for specialists.</p>
                </div>
            </div>
            <div className="govuk-accordion__section ">
                <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-3">
                    Know your audience
                    </span>
                </h2>
                </div>
                <div id="accordion-default-content-3" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-3">
                <p className='govuk-body'>This is the content for Know your audience.</p>
                </div>
            </div>
            <div className="govuk-accordion__section ">
                <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-4">
                    How people read
                    </span>
                </h2>
                </div>
                <div id="accordion-default-content-4" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-4">
                <p className='govuk-body'>This is the content for How people read.</p>
                </div>
            </div>
            </div>
        </main>
    )
}