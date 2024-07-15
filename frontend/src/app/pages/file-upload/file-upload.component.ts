import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    standalone: true,
    imports: [FileUploadModule, ToastModule, CommonModule],
    providers: [MessageService]
})
export class FileUploadComponent {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}