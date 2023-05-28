export abstract class AppService {
    protected getErrorMessage(error: any): string {
        if (error.error?.message) {
            return error.error.message;
        } else {
            return error.message;
        }
    }
}