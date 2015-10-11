import {ActionSheetPage} from './actionSheet/actionSheet';

import {ButtonsPage,
        BlockButtonsPage,
        ClearButtonsPage,
        FullButtonsPage,
        OutlineButtonsPage,
        RoundButtonsPage,
        FabPage,
        ButtonSizesPage,
        IconButtonsPage,
        ButtonsInComponentsPage} from './buttons/buttons';

import {CardsPage} from './cards/cards';
import {FormsPage} from './forms/forms';
import {IconsPage} from './icons/icons';
import {ListsPage} from './lists/lists';
import {MenusPage} from './menus/menus';
import {ModalsPage} from './modals/modals';
import {NavigationPage} from './navigation/navigation';
import {PopupsPage} from './popups/popups';
import {SlidesPage} from './slides/slides';
import {TabsPage} from './tabs/tabs';


export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export function getPageFor(hash) {
    return {
        'action-sheets': ActionSheetPage,
        'buttons': ButtonsPage,
        'block-buttons': BlockButtonsPage,
        'clear-buttons': ClearButtonsPage,
        'full-buttons': FullButtonsPage,
        'outline-buttons': OutlineButtonsPage,
        'round-buttons': RoundButtonsPage,
        'floating-action-buttons': FabPage,
        'buttons-in-components': ButtonsInComponentsPage,
        'button-sizes': ButtonSizesPage,
        'icon-buttons': IconButtonsPage,
        'cards': CardsPage,
        'forms': FormsPage,
        'icons': IconsPage,
        'lists': ListsPage,
        'menus': MenusPage,
        'modals': ModalsPage,
        'navigation': NavigationPage,
        'popups': PopupsPage,
        'slides': SlidesPage,
        'tabs': TabsPage
    }[hash]
}