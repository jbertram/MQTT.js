/*
 * Copyright (c) 2015-2015 MQTT.js contributors.
 * Copyright (c) 2011-2014 Adam Rudd.
 *
 * See LICENSE for more information
 */

import MqttClient from './lib/client'
import DefaultMessageIdProvider from './lib/default-message-id-provider'
import UniqueMessageIdProvider from './lib/unique-message-id-provider'
import Store, { IStore } from './lib/store'
import connect from './lib/connect'

export const Client = MqttClient
export {
	connect,
	MqttClient,
	Store,
	DefaultMessageIdProvider,
	UniqueMessageIdProvider,
	IStore,
}
export * from './lib/client'
