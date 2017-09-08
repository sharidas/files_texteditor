/**
 * ownCloud - Files_Texteditor
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Tom Needham <tom@owncloud.com>
 * @copyright Tom Needham 2015
 */

import * as ace from 'brace';
import {SidebarPreview} from './sidebarpreview';
import {Texteditor} from './editor';
import {newFileMenuPlugin} from './newfileplugin';

// convince webpack to load chunks
__webpack_require__.p = OC.filePath('files_texteditor', 'js', '../build/');
__webpack_require__.nc = $('script[nonce][src]')[0].getAttribute('nonce');

window.ace = ace;

OCA.Files_Texteditor = Texteditor;

OC.Plugins.register('OCA.Files.NewFileMenu', newFileMenuPlugin);
OC.Plugins.register('OCA.Files.SidebarPreviewManager', new SidebarPreview());

$(document).ready(function () {
	$('#editor').remove();
	OCA.Files_Texteditor.initialize($('<div id="app-content-texteditor"></div>'));
});
