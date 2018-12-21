/**
 * @file mofron-event-link/index.js
 * @author simpart
 */
const mf    = require('mofron');
const Click = require('mofron-event-click');

/**
 * @class mofron.event.Link
 * @brief Link event class for component
 */
mf.event.Link = class extends Click {
    
    constructor (po) {
        try {
            super();
            this.name('Link');
            this.prmMap('url');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            super.contents(tgt_dom);
            let link = this;
            this.handler(
                (cmp,clk) => {
                    try {
                        let url = link.url();
                        if (true === url[1]) {
                            window.open(url[0], '_blank');
                        } else {
                            window.location.href = url[0];
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    url (prm, flg) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_url) ? ['', true] : this.m_url;
            }
            /* setter */
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            if (undefined === flg) {
                flg = false;
            }
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_url = [prm, flg];
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.event.Link;
/* end of file */
