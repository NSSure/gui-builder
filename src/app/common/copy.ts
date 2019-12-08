import ToastManager from './toast';

let toastManager = new ToastManager({
    enableManualDismiss: true
});

export default function copy(value: string, msg?: string) {
    let dummy = document.createElement("input");
    
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");

    let input: HTMLInputElement = <HTMLInputElement>document.getElementById("dummy_id");
    input.value = value;

    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    if (msg) {
        toastManager.showSuccess(msg);
    }
    else {
        toastManager.showSuccess('Copied to clipboard successfully');
    }
}