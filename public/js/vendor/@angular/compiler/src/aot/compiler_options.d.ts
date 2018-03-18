/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { MissingTranslationStrategy } from '@angular/core';
export interface AotCompilerOptions {
    locale?: string;
    i18nFormat?: string;
    translations?: string;
<<<<<<< Updated upstream
    missingTranslation?: MissingTranslationStrategy;
    enableLegacyTemplate?: boolean;
    enableSummariesForJit?: boolean;
    preserveWhitespaces?: boolean;
=======
    enableLegacyTemplate?: boolean;
    /** preamble for all generated source files */
    genFilePreamble?: string;
>>>>>>> Stashed changes
}
