export default function ServiceTableRow({ data }){
    console.log(data);
    return (
    <tr class="govuk-table__row">
        <td scope="row" class="govuk-table__cell"> { data.ServiceName }</td>
        <td class="govuk-table__cell">{ data.isCounty.toString() }</td>
        <td class="govuk-table__cell"> { data.Synonyms }</td>
        <td class="govuk-table__cell"><a href="#" class="govuk-link">Edit</a></td>
    </tr>
    )
}