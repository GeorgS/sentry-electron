import { defaultIntegrations } from '@sentry/browser';
import { initAndBind } from '@sentry/core';
import { ElectronOptions } from '..';
import { RendererClient } from './client';
export { RendererBackend } from './backend';
export { RendererClient } from './client';

/**
 * Call init on @sentry/browser with all browser integrations
 * @param options ElectronOptions
 */
export function init(options: ElectronOptions): void {
  initAndBind(RendererClient, options, defaultIntegrations);
}