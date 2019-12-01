export default class ToastManager {
    positions: Array<string> = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top', 'bottom', 'top-flush', 'bottom-flush'];
    themes: Array<string> = ['default', 'success', 'warning', 'error', 'info'];
    pluginDefaultOptions: any = {
      position: 'top-right',
      enableManualDismiss: false,
      limit: 3,
      theme: 'default',
      persist: false,
      reverseToastOrder: false,
      interval: 5000,
      title: null,
      showProgressBar: true
    };
    defaultOptions: any;
    userDefaultOptions: any = this.defaultOptions || {};
    toastsLoaded: number = 0;
    toasts: Array<any> = [];
  
    constructor(defaultOptions?: any) {
      this.userDefaultOptions = defaultOptions;
    }
  
    // START PUBLIC
  
    public show(message, options?: any) {
      // Make sure the options passed to the show method are always at least an empty object.
      options = options ? options : {};
      options = this.setDefaultOptions(options);
      
      if (this.toastsLoaded < options.limit) {
        let toast = this.configureToast(message, options);
  
        this.toasts.push(toast);
        this.toastsLoaded++;
  
        var root = this.configureRootElement(options);
  
        // This is false by default so new toasts are added at the top.
        if (options.reverseToastOrder) {
          root.appendChild(toast);
        }
        else {
          root.insertBefore(toast, root.firstChild);
        }
      }
    }
  
    public showSuccess(message, options?: any) {
      options = options || {};
      options.theme = "success";

      this.show(message, options);
    }
  
    public showError(message, options?: any) {
      options = options || {};
      options.theme = "error";
      this.show(message, options);
    }
  
    public showInfo(message, options?: any) {
      options = options || {};
      options.theme = "info";

      this.show(message, options);
    }
  
    public showWarning(message, options?: any) {
      options = options || {};
      options.theme = "warning";

      this.show(message, options);
    }
  
    public dismiss(toast) {
      if (toast) {
        toast.remove();
        this.toastsLoaded--;
      }
    }
  
    dismissAll() {
      this.toasts.forEach((toast) => {
        toast.remove();
        this.toastsLoaded--;
      });
    }
  
    generateElementToast(message, options) {
      options = options ? options : {};
      options = this.setDefaultOptions(options);
      return this.configureToast(message, options);
    }
  
    // END PUBLIC
  
    private configureRootElement(options) {
      var root = document.getElementById('sure-toast-root');
  
      if (!root) {
        root = document.createElement("div");
        root.id = "sure-toast-root";
  
        document.body.appendChild(root);
  
        // The position is only applied when the plugin initializes it can't be adjusted per toast.
        this.applyPosition(root, options.position);
      }
  
      return root;
    }
  
    private configureToast(message, options) {
      let toast = this.createToast(message, options);
  
      if (typeof options.onOpened === "function") {
        options.onOpened();
      }
  
      if (options.enableManualDismiss) {
        toast.addEventListener('click', () => this.dismiss(toast));
      }
  
      if (!options.persist) {
        if (options.showProgressBar) {
          let progressBarIdSuffix = this.generateRandomId();
          var progressBarId = `progress-bar-${progressBarIdSuffix}`;
  
          let progressBar = this.createProgressBar();
          progressBar.id = progressBarId;
  
          progressBar.setAttribute('style', `animation: collapse ${options.interval / 1000}s; animation-timing-function: linear;`);
  
          toast.appendChild(progressBar);
        }
  
        setTimeout(() => {
          this.dismiss(toast);
  
          if (typeof options.onClosed === "function") {
            options.onClosed();
          }
        }, options.interval);
      }
  
      return toast;
    }
  
    private createToast(message, options) {
      let toastIdSuffix = this.generateRandomId();
      let toastId = `sure-toast-${toastIdSuffix}`;
  
      let toast = document.createElement("div");
  
      toast.classList.add('sure-toast');
      toast.setAttribute('style', '');
      toast.id = toastId;
  
      this.applyTheme(toast, options.theme);
  
      toast.appendChild(this.createToastContent(message, options));
  
      if (options.action || (options.actions && Array.isArray(options.actions) && options.actions.length > 0)) {
        toast.appendChild(this.createToastActions(options));
      }
  
      return toast;
    }
  
    private createToastContent(message, options) {
      let toastContent = document.createElement("div");
      toastContent.classList.add('sure-toast-content');
  
      if (options.title) {
        toastContent.appendChild(this.createToastTitle(options.title));
      }
  
      toastContent.appendChild(this.createToastMessage(message));
  
      return toastContent;
    }
  
    private createToastTitle(title) {
      let titleContainer = document.createElement("div");
      titleContainer.classList.add('sure-toast-header');
  
      let titleText = document.createElement("label");
      titleText.classList.add('sure-toast-title');
  
      titleText.innerText = title;
  
      titleContainer.appendChild(titleText);
  
      return titleContainer
    }
  
    private createToastMessage(message) {
      let messageContainer = document.createElement("div");
      messageContainer.classList.add("sure-toast-message");
  
      let messageBody = document.createElement('span');
  
      messageBody.innerHTML = `${message}`;
  
      messageContainer.appendChild(messageBody);
  
      return messageContainer;
    }
  
    private createToastActions(options) {
      let actionContainer = this.createActionContainer();
  
      if (options.action) {
        actionContainer.appendChild(this.createAction(options.action));
      }
      else {
        if (Array.isArray(options.actions)) {
          options.actions.map((action) => {
            actionContainer.appendChild(this.createAction(action));
          });
        }
      }
  
      return actionContainer;
    }
  
    private createAction(action) {
      let anchor = document.createElement("a");
  
      anchor.classList.add('toast-action');
      anchor.setAttribute('href', '#');
  
      anchor.innerHTML += action.text;
      anchor.addEventListener('click', action.onClick);
  
      return anchor;
    }
  
    private createActionContainer() {
      let actionContainer = document.createElement("div");
      actionContainer.classList.add("action-container");
  
      return actionContainer;
    }
  
    private createProgressBar() {
      let progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
  
      let bar = document.createElement('div');
      bar.classList.add('bar');
  
      progressBar.appendChild(bar);
  
      return progressBar;
    }
  
    private applyTheme(toast, theme) {
      toast.classList.add(theme);
    }
  
    private applyPosition(root, position) {
      root.className = "";
      root.classList.add(position);
    }
  
    private setDefaultOptions(options) {
      this.mapPluginLevelOnlyOptions(options);
      this.mapOptions(this.userDefaultOptions, this.pluginDefaultOptions);
      this.mapOptions(options, this.userDefaultOptions);
  
      return options;
    }
  
    private mapPluginLevelOnlyOptions(target) {
      target.position = this.userDefaultOptions.position || this.pluginDefaultOptions.position;
      target.limit = this.userDefaultOptions.limit || this.pluginDefaultOptions.limit;
      target.reverseToastOrder = this.userDefaultOptions.reverseToastOrder || this.pluginDefaultOptions.reverseToastOrder;
    }
  
    private mapOptions(target, source) {
      // TODO: Fix this mess.
  
      // map option properties.
      target.enableManualDismiss = target.enableManualDismiss !== undefined ? target.enableManualDismiss : source.enableManualDismiss;
      target.showProgressBar = target.showProgressBar !== undefined ? target.showProgressBar : source.showProgressBar;
      target.theme = target.theme !== undefined ? target.theme : source.theme;
      target.interval = target.interval !== undefined ? target.interval : source.interval;
      target.persist = target.persist !== undefined ? target.persist : source.persist;
  
      // map option functions.
      target.onClosed = target.onClosed !== undefined ? target.onClosed : source.onClosed
      target.onOpened = target.onOpened !== undefined ? target.onOpened : source.onOpened
    }
  
    private generateRandomId() {
      return Math.floor((Math.random() * 10000) + 1);
    }
  }
  