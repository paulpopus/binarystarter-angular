import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
})
export class LoadingComponent {
  @Input() isGlobal: "true" | "false" = "false";
}
