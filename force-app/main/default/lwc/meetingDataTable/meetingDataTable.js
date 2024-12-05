import { LightningElement, wire } from 'lwc';
import getMeetingRecords from '@salesforce/apex/MeetingController.getMeetingRecords';

export default class MeetingDataTable extends LightningElement {

    meetings;
    columns = [
        { label: 'Meeting Name', fieldName: 'Name' },
        { label: 'Meeting Date', fieldName: 'Meeting_Date__c', type: 'date' },
        { label: 'Location', fieldName: 'Location__c' },
        { label: 'Capacity', fieldName: 'Capacity__c', type: 'number' },
        { label: 'Registered Participants', fieldName: 'Registered_Participants__c', type: 'number' },
        { label: 'Remaining Capacity', fieldName: 'Remaining_Capacity__c', type: 'number' },
        { label: 'Status', fieldName: 'Status__c' }
    ];


    @wire(getMeetingRecords)
    wiredMeetings({ data, error }) {
        if (data) {
            this.meetings = data;
        } else if (error) {
            console.error(error);
        }
    }
}