import React from 'react';
import { SiteLayout } from '../../layout';
import * as styles from '../../assets/scss/component/Guestbook.scss';

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Guestbook}>
                <h2>Guestbook</h2>
            </div>
            </SiteLayout>
    );
}