import { NgModule } from '@angular/core';
import { MatTooltipModuleComponent } from './mat-tooltip-module/mat-tooltip-module.component';
import { Routes, RouterModule } from '@angular/router';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AllComponent } from './all.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChipComponent } from './chip/chip.component';
import { ClipBoardComponent } from './clip-board/clip-board.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DividerComponent } from './divider/divider.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PlatformComponent } from './platform/platform.component';
import { PortalsComponent } from './portals/portals.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressComponent } from './progress/progress.component';
import { RadioComponent } from './radio/radio.component';
import { RippleComponent } from './ripple/ripple.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { SelectComponent } from './select/select.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { SsideNaveComponent } from './sside-nave/sside-nave.component';
import { StepperMaterialComponent } from './stepper-material/stepper-material.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableMaterialComponent } from './table-material/table-material.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TreeMaterualComponent } from './tree-materual/tree-materual.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    component: AllComponent,
    children: [
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
      },
      {
        path : 'Home',
        component : HomeComponent
      },
      {
        path : 'accessibility',
        component : AccessibilityComponent
      },
      {
        path : 'Accordian',
        component : AccordianComponent
      },
      {
        path : 'clipboard',
        component : ClipBoardComponent
      },
      {
        path : 'dragAndDrop',
        component : DragAndDropComponent
      },
      {
        path : 'OverlayModule',
        component : OverlayComponent
      },
      {
        path : 'platform',
        component : PlatformComponent
      },
      {
        path : 'portals',
        component : PortalsComponent
      },
      {
        path : 'scrolling',
        component : ScrollingComponent
      },
      {
        path : 'stepper',
        component : StepperComponent
      },
      {
        path : 'table',
        component : TableComponent
      },
      {
        path : 'textarea',
        component : TextareaComponent
      },
      {
        path : 'tree',
        component : TreeComponent
      },
      {
        path : 'autocomplete',
        component : AutocompleteComponent
      },
      {
        path : 'badge',
        component : BadgeComponent
      },
      {
        path : 'bottom-sheet',
        component : BottomSheetComponent
      },
      {
        path : 'button',
        component : ButtonComponent
      },
      {
        path : 'button-toggle',
        component : ButtonToggleComponent
      },
      {
        path : 'card',
        component :  CardComponent
      },
      {
        path : 'checkbox',
        component : CheckBoxComponent
      },
      {
        path : 'chip',
        component : ChipComponent
      },
      {
        path : 'datePicker',
        component : DatePickerComponent
      },
      {
        path : 'modal',
        component : ModalComponent
      },
      {
        path : 'divider',
        component : DividerComponent
      },
      {
        path : 'expansion-panel',
        component : ExpansionPanelComponent
      },
      {
        path : 'form',
        component : FormComponent
      },
      {
        path : 'grid',
        component : GridComponent
      },
      {
        path : 'icon',
        component : IconComponent
      },
      {
        path : 'input',
        component : InputComponent
      },
      {
        path : 'list',
        component : ListComponent
      },
      {
        path : 'menu',
        component : MenuComponent
      },
      {
        path : 'paginator',
        component : PaginatorComponent
      },
      {
        path :'progress',
        component : ProgressComponent
      },
      {
        path : 'progress-spinner',
        component : ProgressSpinnerComponent
      },
      {
        path : 'radio',
        component : RadioComponent
      },
      {
        path : 'ripple',
        component : RippleComponent
      },
      {
        path : 'select',
        component : SelectComponent
      },
      {
        path : 'sideNav',
        component : SsideNaveComponent
      },
      {
        path : 'slide-toggle',
        component : SlideToggleComponent
      },
      {
        path : 'slider',
        component : SliderComponent
      },
      {
        path : 'snake',
        component :  SnackBarComponent
      },
      {
        path : 'sort-header',
        component : SortHeaderComponent
      },
      {
        path : 'stepper-Material',
        component : StepperMaterialComponent
      },
      {
        path : 'table-material',
        component :  TableMaterialComponent
      },
      {
        path : 'tabs',
        component : TabsComponent
      },
      {
        path : 'toolbar',
        component : ToolbarComponent
      },
      {
        path : 'matTooltip',
        component : MatTooltipModuleComponent
      },
      {
        path : 'tree-materual',
        component : TreeMaterualComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AllRoutingModule { }