/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('../'), {
    tags: {
        blockStart: '<%',
        blockEnd: '%>'
    },
    autoescape: false  // Required to allow nearley syntax strings
});
const compiled = nunjucks.precompile('src/template/grammar/template.ne', {env, name: 'template.ne' });
fs.writeFileSync(path.resolve(__dirname,'../lib/template/grammar/compiled_template.js'),compiled);