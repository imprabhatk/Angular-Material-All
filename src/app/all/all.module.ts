import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { HomeComponent } from './home/home.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { A11yModule } from '@angular/cdk/a11y';
import { AccordianComponent } from './accordian/accordian.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipBoardComponent } from './clip-board/clip-board.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformComponent } from './platform/platform.component';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalsComponent } from './portals/portals.component';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CustomStepper, StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TextareaComponent } from './textarea/textarea.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { TreeComponent } from './tree/tree.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgeComponent } from './badge/badge.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomSheetComponent, BottomSheetOverviewExampleSheet } from './bottom-sheet/bottom-sheet.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import {MatIconModule} from '@angular/material/icon';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckBoxComponent } from './check-box/check-box.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { ChipComponent } from './chip/chip.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogTitle} from '@angular/material/dialog';
import { DialogContentExampleDialog, ModalComponent } from './modal/modal.component';
import { DividerComponent } from './divider/divider.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressComponent } from './progress/progress.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RadioComponent } from './radio/radio.component';
import { RippleComponent } from './ripple/ripple.component';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { SsideNaveComponent } from './sside-nave/sside-nave.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SliderComponent } from './slider/slider.component';
import {MatSliderModule} from '@angular/material/slider';
import { PizzaPartyComponent, SnackBarComponent } from './snack-bar/snack-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import {MatSortModule} from '@angular/material/sort';
import { StepperMaterialComponent } from './stepper-material/stepper-material.component';
import {MatStepperModule} from '@angular/material/stepper';
import { TableMaterialComponent } from './table-material/table-material.component';
import {MatTableModule} from '@angular/material/table';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModuleComponent } from './mat-tooltip-module/mat-tooltip-module.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TreeMaterualComponent } from './tree-materual/tree-materual.component';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AllComponent, HomeComponent, AccessibilityComponent, 
    AccordianComponent, ClipBoardComponent, DragAndDropComponent, 
    OverlayComponent, PlatformComponent, PortalsComponent,
    ScrollingComponent, StepperComponent, CustomStepper, TableComponent,
    TextareaComponent, TreeComponent, AutocompleteComponent, 
    BadgeComponent, BottomSheetComponent, BottomSheetOverviewExampleSheet,
    ButtonComponent, ButtonToggleComponent, CardComponent,
    CheckBoxComponent, ChipComponent, DatePickerComponent,
    ModalComponent, DialogContentExampleDialog, DividerComponent,
    ExpansionPanelComponent, FormComponent, GridComponent, IconComponent, 
    InputComponent, ListComponent, MenuComponent, PaginatorComponent,
    ProgressComponent, ProgressSpinnerComponent, RadioComponent,RippleComponent,
    SelectComponent, SsideNaveComponent, SlideToggleComponent, SliderComponent,
    SnackBarComponent, PizzaPartyComponent, SortHeaderComponent,
    StepperMaterialComponent, TableMaterialComponent, TabsComponent,
    ToolbarComponent, TreeMaterualComponent, MatTooltipModuleComponent],
  imports: [
    CommonModule,
    AllRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    DragDropModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    TextFieldModule,
    CdkTreeModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  entryComponents: [ModalComponent, DialogContentExampleDialog],
})

export class AllModule { }