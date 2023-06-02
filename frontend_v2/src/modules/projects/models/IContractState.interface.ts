export default interface IContractState {
    _id: String,
    user_id: String,
    project_id: String,
    contract_type: String,
    participant_id: String,
    participant_name: String,
    skill: String,
    percentage_offered: Number,
    contract_status: String,
    contract_start_date: Date,
    createdAt: Date,
    updatedAt: Date
}