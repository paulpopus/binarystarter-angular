import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandingSymbolComponent } from '../branding/branding-symbol.component';

@Component({
  selector: 'web-footer-v1',
  standalone: true,
  imports: [CommonModule, BrandingSymbolComponent],
  templateUrl: './footer-v1.component.html',
})
export class FooterV1Component {
  @Input({ required: true }) copyright: string;
}
