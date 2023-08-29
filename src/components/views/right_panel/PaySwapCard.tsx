/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { useContext } from "react";

import MatrixClientContext from "../../../contexts/MatrixClientContext";
import BaseCard from "./BaseCard";
import AppTile from "../elements/AppTile";
import { _t } from "../../../languageHandler";
import Heading from "../typography/Heading";

interface IProps {
    room: any;
    onClose(): void;
}

const PaySwapCard: React.FC<IProps> = ({ room, onClose }) => {
    const cli = useContext(MatrixClientContext);
    const app = {
        "avatar_url": "mxc://integrations.ems.host/14b405c441e0fcc3c9034034d94ea555e37f84fc",
        "data": {
            "title": "PaySwap!",
            "url": "https://payswap.org/"
        },
        "name": "PaySwap!",
        "type": "m.custom",
        "url": "https://scalar.vector.im/api/widgets/generic.html?url=$url",
        "creatorUserId": "@ekontetevi:matrix.org",
        "id": "976f04d5-7df1-4a7c-900d-79a09c60db90",
        "roomId": "!wuWqZNSsfOVRrZRbyg:matrix.org",
        "eventId": "$HSSM5aUXf5bOt1xOjtu-MwlEnPjUHOQZ_kljcCY2Pok"
    }

    const header = (
        <div className="mx_BaseCard_header_title">
            <Heading size="4" className="mx_BaseCard_header_title_heading">
                PaySwap
            </Heading>
        </div>
    );
    return (
        <BaseCard 
        header={header} 
        className="mx_WidgetCard" 
        onClose={onClose} 
        withoutScrollContainer
        >
            <AppTile
                app={app}
                fullWidth
                showMenubar={false}
                room={room}
                userId={cli.getSafeUserId()}
                creatorUserId={app.creatorUserId}
                widgetPageTitle={app.name}
            />
        </BaseCard>
    );
};

export default PaySwapCard;
