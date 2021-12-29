// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

export class DataSource extends pulumi.CustomResource {
    /**
     * Get an existing DataSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSourceState, opts?: pulumi.CustomResourceOptions): DataSource {
        return new DataSource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'grafana:/dataSource:DataSource';

    /**
     * Returns true if the given object is an instance of DataSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSource.__pulumiType;
    }

    /**
     * The method by which Grafana will access the data source: `proxy` or `direct`.
     */
    public readonly accessMode!: pulumi.Output<string | undefined>;
    /**
     * Whether to enable basic auth for the data source.
     */
    public readonly basicAuthEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Basic auth password.
     */
    public readonly basicAuthPassword!: pulumi.Output<string | undefined>;
    /**
     * Basic auth username.
     */
    public readonly basicAuthUsername!: pulumi.Output<string | undefined>;
    /**
     * (Required by some data source types) The name of the database to use on the selected data source server.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * Whether to set the data source as default. This should only be `true` to a single data source.
     */
    public readonly isDefault!: pulumi.Output<boolean | undefined>;
    /**
     * (Required by some data source types)
     */
    public readonly jsonDatas!: pulumi.Output<outputs.DataSourceJsonData[] | undefined>;
    /**
     * A unique name for the data source.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * (Required by some data source types) The password to use to authenticate to the data source.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly secureJsonDatas!: pulumi.Output<outputs.DataSourceSecureJsonData[] | undefined>;
    /**
     * The data source type. Must be one of the supported data source keywords.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Unique identifier. If unset, this will be automatically generated.
     */
    public readonly uid!: pulumi.Output<string>;
    /**
     * The URL for the data source. The type of URL required varies depending on the chosen data source type.
     */
    public readonly url!: pulumi.Output<string | undefined>;
    /**
     * (Required by some data source types) The username to use to authenticate to the data source.
     */
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a DataSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataSourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataSourceArgs | DataSourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataSourceState | undefined;
            resourceInputs["accessMode"] = state ? state.accessMode : undefined;
            resourceInputs["basicAuthEnabled"] = state ? state.basicAuthEnabled : undefined;
            resourceInputs["basicAuthPassword"] = state ? state.basicAuthPassword : undefined;
            resourceInputs["basicAuthUsername"] = state ? state.basicAuthUsername : undefined;
            resourceInputs["databaseName"] = state ? state.databaseName : undefined;
            resourceInputs["isDefault"] = state ? state.isDefault : undefined;
            resourceInputs["jsonDatas"] = state ? state.jsonDatas : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["secureJsonDatas"] = state ? state.secureJsonDatas : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as DataSourceArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accessMode"] = args ? args.accessMode : undefined;
            resourceInputs["basicAuthEnabled"] = args ? args.basicAuthEnabled : undefined;
            resourceInputs["basicAuthPassword"] = args ? args.basicAuthPassword : undefined;
            resourceInputs["basicAuthUsername"] = args ? args.basicAuthUsername : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["isDefault"] = args ? args.isDefault : undefined;
            resourceInputs["jsonDatas"] = args ? args.jsonDatas : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["secureJsonDatas"] = args ? args.secureJsonDatas : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(DataSource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DataSource resources.
 */
export interface DataSourceState {
    /**
     * The method by which Grafana will access the data source: `proxy` or `direct`.
     */
    accessMode?: pulumi.Input<string>;
    /**
     * Whether to enable basic auth for the data source.
     */
    basicAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Basic auth password.
     */
    basicAuthPassword?: pulumi.Input<string>;
    /**
     * Basic auth username.
     */
    basicAuthUsername?: pulumi.Input<string>;
    /**
     * (Required by some data source types) The name of the database to use on the selected data source server.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Whether to set the data source as default. This should only be `true` to a single data source.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * (Required by some data source types)
     */
    jsonDatas?: pulumi.Input<pulumi.Input<inputs.DataSourceJsonData>[]>;
    /**
     * A unique name for the data source.
     */
    name?: pulumi.Input<string>;
    /**
     * (Required by some data source types) The password to use to authenticate to the data source.
     */
    password?: pulumi.Input<string>;
    secureJsonDatas?: pulumi.Input<pulumi.Input<inputs.DataSourceSecureJsonData>[]>;
    /**
     * The data source type. Must be one of the supported data source keywords.
     */
    type?: pulumi.Input<string>;
    /**
     * Unique identifier. If unset, this will be automatically generated.
     */
    uid?: pulumi.Input<string>;
    /**
     * The URL for the data source. The type of URL required varies depending on the chosen data source type.
     */
    url?: pulumi.Input<string>;
    /**
     * (Required by some data source types) The username to use to authenticate to the data source.
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataSource resource.
 */
export interface DataSourceArgs {
    /**
     * The method by which Grafana will access the data source: `proxy` or `direct`.
     */
    accessMode?: pulumi.Input<string>;
    /**
     * Whether to enable basic auth for the data source.
     */
    basicAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Basic auth password.
     */
    basicAuthPassword?: pulumi.Input<string>;
    /**
     * Basic auth username.
     */
    basicAuthUsername?: pulumi.Input<string>;
    /**
     * (Required by some data source types) The name of the database to use on the selected data source server.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Whether to set the data source as default. This should only be `true` to a single data source.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * (Required by some data source types)
     */
    jsonDatas?: pulumi.Input<pulumi.Input<inputs.DataSourceJsonData>[]>;
    /**
     * A unique name for the data source.
     */
    name?: pulumi.Input<string>;
    /**
     * (Required by some data source types) The password to use to authenticate to the data source.
     */
    password?: pulumi.Input<string>;
    secureJsonDatas?: pulumi.Input<pulumi.Input<inputs.DataSourceSecureJsonData>[]>;
    /**
     * The data source type. Must be one of the supported data source keywords.
     */
    type: pulumi.Input<string>;
    /**
     * Unique identifier. If unset, this will be automatically generated.
     */
    uid?: pulumi.Input<string>;
    /**
     * The URL for the data source. The type of URL required varies depending on the chosen data source type.
     */
    url?: pulumi.Input<string>;
    /**
     * (Required by some data source types) The username to use to authenticate to the data source.
     */
    username?: pulumi.Input<string>;
}