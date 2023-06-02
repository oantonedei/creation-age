export default interface IMediaState {
  _id: string;
  user_id: string;
  name: string;
  description: string;
  industry: string;
  phase: string;
  status: string;
  participants: [
    {
      participant_id: string;
      participant_name: string;
      skill: string;
      percentage_offered: number;
      contract_id: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}
