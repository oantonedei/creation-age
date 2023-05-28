export interface Alert {
    type: 'info' | 'warning' | 'success' | 'danger';
    title?: string;
    message: string;
    autoDismiss: boolean;
    timeout:number;
}