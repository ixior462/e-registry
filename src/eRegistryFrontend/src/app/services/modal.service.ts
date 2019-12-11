import {Component, Injectable} from '@angular/core';
import {BSModalContextBuilder, Modal} from 'ngx-modialog/plugins/bootstrap';
import {AddNewClassComponent} from '../components/add-new-class/add-new-class.component';
import {ContainerContent, OverlayConfig, overlayConfigFactory, OverlayContextBuilder} from 'ngx-modialog';
import { BsModalService, BsModalRef} from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private bsModalRef: BsModalRef;

  /**
   * Creates instance of service
   * @param modal
   */
  constructor(private modal: BsModalService) { }

  /**
   * Shows component in Modal Dialog
   * @param component
   * @param data
   */
  public showComponent(component: any, data: any) {
    this.bsModalRef = this.modal.show(component, { initialState: data });
  }
}
