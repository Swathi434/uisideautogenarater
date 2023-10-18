import { importActivities } from "../validate ui/journey-builder-app/sagas/journey-builder/activities/activities_worker_saga";

importActivities


function Validateselecters(){
    document.querySelector(sidebar);
    const element = document.querySelector('#Journeys');
    console.log(!!element)
    return !!element; 
    
}
export default Validateselecters;