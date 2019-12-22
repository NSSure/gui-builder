import { Component, OnInit } from '@angular/core';
import { GuiWizadService } from 'src/app/services/local/gui-wizard.service';
import ToastManager from 'src/app/common/toast';
import HtmlDefinitions from 'src/app/common/html-definitions';
import StandardElement from 'src/app/models/StandardElement';

@Component({
  selector: 'element-settings',
  templateUrl: './element-settings.component.html',
  styleUrls: ['./element-settings.component.scss']
})
export class ElementSettingsComponent implements OnInit {
    sectionId: number;
    attributes: Array<any> = new Array();
    element: HTMLElement;
    previousElement: HTMLElement;
    cssPath: string;
    htmlDefinitions: HtmlDefinitions = new HtmlDefinitions();
    standardElement: StandardElement;

    toastManager = new ToastManager({
        enableManualDismiss: true
    });

    constructor(private _guiWizardService: GuiWizadService) {

    }

    ngOnInit() {
        this._guiWizardService.enableSectionObservable.subscribe((sectionId) => {
            console.log(sectionId);
        })

        this._guiWizardService.selectedElementObservable.subscribe((element) => this.loadElement(element));
    }

    loadElement(element: HTMLElement) {
        if (this.element) {
            this.element.style.outline = 'none';
        }

        this.element = element;
        
        if (this.element) {
            this.standardElement = this.htmlDefinitions.standardElements.find(x => x.name == this.element.tagName.toLowerCase());
            console.log(this.element.tagName);

            this.element.style.outline = '2px solid lightskyblue';

            this.cssPath = this.getCssPath(this.element);
            this.attributes = new Array();

            for (let i = 0; i < this.standardElement.standardAttributes.length; i++) {
                let standardAttribute = this.standardElement.standardAttributes[i];
                let attrName = this.htmlDefinitions.standardAttributeMap[standardAttribute];

                console.log(attrName);

                if (attrName) {
                    let attr = { name: attrName, value: '' };

                    for (let ii = 0; ii < this.element.attributes.length; ii++) {
                        let appliedAttr: Attr = this.element.attributes[ii];

                        if (attrName === appliedAttr.name) {
                            attr.value = appliedAttr.value;
                        }
                    }

                    this.attributes.push(attr);
                }
            }
        }
    }

    loadParent() {
        let isEndOfHierarchy = false;

        if (this.element.parentElement) {
            let attr = this.element.parentElement.attributes.getNamedItem("isolated-section");

            if (!attr || attr.value == "false") {
                this.loadElement(this.element.parentElement);
            }
            else {
                isEndOfHierarchy = true;
            }
        }

        if (isEndOfHierarchy) {
            this.toastManager.showWarning('Element has no parent element.');
        }
    }

    getCssPath(el) {
        if (!(el instanceof Element)) 
            return;
        var path = [];
        while (el.nodeType === Node.ELEMENT_NODE) {
            var selector = el.nodeName.toLowerCase();
            if (el.id) {
                selector += '#' + el.id;
                path.unshift(selector);
                break;
            } else {
                var sib = el, nth = 1;
                while (sib = sib.previousElementSibling) {
                    if (sib.nodeName.toLowerCase() == selector)
                       nth++;
                }
                if (nth != 1)
                    selector += ":nth-of-type("+nth+")";
            }
            path.unshift(selector);
            el = el.parentNode;
        }
        return path.join(" > ");
     }
}
