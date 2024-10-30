import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiAccount } from '@mdi/js';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            account: mdiAccount,
        },
        sets: {
            mdi,
        },
    },
});
//# sourceMappingURL=vuetify.js.map