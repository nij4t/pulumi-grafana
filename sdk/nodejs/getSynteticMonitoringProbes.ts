// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSynteticMonitoringProbes(opts?: pulumi.InvokeOptions): Promise<GetSynteticMonitoringProbesResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("grafana:/getSynteticMonitoringProbes:getSynteticMonitoringProbes", {
    }, opts);
}

/**
 * A collection of values returned by getSynteticMonitoringProbes.
 */
export interface GetSynteticMonitoringProbesResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly probes: {[key: string]: number};
}
