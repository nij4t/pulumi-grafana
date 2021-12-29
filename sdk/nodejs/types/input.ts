// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface BuiltinRoleAssignmentRole {
    global?: pulumi.Input<boolean>;
    uid: pulumi.Input<string>;
}

export interface DashboardPermissionPermission {
    permission: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    teamId?: pulumi.Input<number>;
    userId?: pulumi.Input<number>;
}

export interface DataSourceJsonData {
    assumeRoleArn?: pulumi.Input<string>;
    authType?: pulumi.Input<string>;
    authenticationType?: pulumi.Input<string>;
    clientEmail?: pulumi.Input<string>;
    connMaxLifetime?: pulumi.Input<number>;
    customMetricsNamespaces?: pulumi.Input<string>;
    defaultProject?: pulumi.Input<string>;
    defaultRegion?: pulumi.Input<string>;
    encrypt?: pulumi.Input<string>;
    esVersion?: pulumi.Input<string>;
    graphiteVersion?: pulumi.Input<string>;
    httpMethod?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    logLevelField?: pulumi.Input<string>;
    logMessageField?: pulumi.Input<string>;
    maxConcurrentShardRequests?: pulumi.Input<number>;
    maxIdleConns?: pulumi.Input<number>;
    maxOpenConns?: pulumi.Input<number>;
    postgresVersion?: pulumi.Input<number>;
    profile?: pulumi.Input<string>;
    queryTimeout?: pulumi.Input<string>;
    sigv4AssumeRoleArn?: pulumi.Input<string>;
    sigv4Auth?: pulumi.Input<boolean>;
    sigv4AuthType?: pulumi.Input<string>;
    sigv4ExternalId?: pulumi.Input<string>;
    sigv4Profile?: pulumi.Input<string>;
    sigv4Region?: pulumi.Input<string>;
    sslMode?: pulumi.Input<string>;
    timeField?: pulumi.Input<string>;
    timeInterval?: pulumi.Input<string>;
    timescaledb?: pulumi.Input<boolean>;
    tlsAuth?: pulumi.Input<boolean>;
    tlsAuthWithCaCert?: pulumi.Input<boolean>;
    tlsSkipVerify?: pulumi.Input<boolean>;
    tokenUri?: pulumi.Input<string>;
    tsdbResolution?: pulumi.Input<string>;
    tsdbVersion?: pulumi.Input<string>;
}

export interface DataSourcePermissionPermission {
    permission: pulumi.Input<string>;
    teamId?: pulumi.Input<number>;
    userId?: pulumi.Input<number>;
}

export interface DataSourceSecureJsonData {
    accessKey?: pulumi.Input<string>;
    basicAuthPassword?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    secretKey?: pulumi.Input<string>;
    sigv4AccessKey?: pulumi.Input<string>;
    sigv4SecretKey?: pulumi.Input<string>;
    tlsCaCert?: pulumi.Input<string>;
    tlsClientCert?: pulumi.Input<string>;
    tlsClientKey?: pulumi.Input<string>;
}

export interface FolderPermissionPermission {
    permission: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    teamId?: pulumi.Input<number>;
    userId?: pulumi.Input<number>;
}

export interface PlaylistItem {
    id?: pulumi.Input<string>;
    order: pulumi.Input<number>;
    title: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

export interface RolePermission {
    action: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
}

export interface SynteticMonitoringCheckSettings {
    dns?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsDns>;
    http?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsHttp>;
    ping?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsPing>;
    tcp?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsTcp>;
}

export interface SynteticMonitoringCheckSettingsDns {
    ipVersion?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    recordType?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    sourceIpAddress?: pulumi.Input<string>;
    validRCodes?: pulumi.Input<pulumi.Input<string>[]>;
    validateAdditionalRrs?: pulumi.Input<pulumi.Input<inputs.SynteticMonitoringCheckSettingsDnsValidateAdditionalRr>[]>;
    validateAnswerRrs?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsDnsValidateAnswerRrs>;
    validateAuthorityRrs?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsDnsValidateAuthorityRrs>;
}

export interface SynteticMonitoringCheckSettingsDnsValidateAdditionalRr {
    failIfMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
    failIfNotMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SynteticMonitoringCheckSettingsDnsValidateAnswerRrs {
    failIfMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
    failIfNotMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SynteticMonitoringCheckSettingsDnsValidateAuthorityRrs {
    failIfMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
    failIfNotMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SynteticMonitoringCheckSettingsHttp {
    basicAuth?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsHttpBasicAuth>;
    bearerToken?: pulumi.Input<string>;
    body?: pulumi.Input<string>;
    cacheBustingQueryParamName?: pulumi.Input<string>;
    failIfBodyMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
    failIfBodyNotMatchesRegexps?: pulumi.Input<pulumi.Input<string>[]>;
    failIfHeaderMatchesRegexps?: pulumi.Input<pulumi.Input<inputs.SynteticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp>[]>;
    failIfHeaderNotMatchesRegexps?: pulumi.Input<pulumi.Input<inputs.SynteticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp>[]>;
    failIfNotSsl?: pulumi.Input<boolean>;
    failIfSsl?: pulumi.Input<boolean>;
    headers?: pulumi.Input<pulumi.Input<string>[]>;
    ipVersion?: pulumi.Input<string>;
    method?: pulumi.Input<string>;
    noFollowRedirects?: pulumi.Input<boolean>;
    proxyUrl?: pulumi.Input<string>;
    tlsConfig?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsHttpTlsConfig>;
    validHttpVersions?: pulumi.Input<pulumi.Input<string>[]>;
    validStatusCodes?: pulumi.Input<pulumi.Input<number>[]>;
}

export interface SynteticMonitoringCheckSettingsHttpBasicAuth {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface SynteticMonitoringCheckSettingsHttpFailIfHeaderMatchesRegexp {
    allowMissing?: pulumi.Input<boolean>;
    header: pulumi.Input<string>;
    regexp: pulumi.Input<string>;
}

export interface SynteticMonitoringCheckSettingsHttpFailIfHeaderNotMatchesRegexp {
    allowMissing?: pulumi.Input<boolean>;
    header: pulumi.Input<string>;
    regexp: pulumi.Input<string>;
}

export interface SynteticMonitoringCheckSettingsHttpTlsConfig {
    caCert?: pulumi.Input<string>;
    clientCert?: pulumi.Input<string>;
    clientKey?: pulumi.Input<string>;
    insecureSkipVerify?: pulumi.Input<boolean>;
    serverName?: pulumi.Input<string>;
}

export interface SynteticMonitoringCheckSettingsPing {
    dontFragment?: pulumi.Input<boolean>;
    ipVersion?: pulumi.Input<string>;
    payloadSize?: pulumi.Input<number>;
    sourceIpAddress?: pulumi.Input<string>;
}

export interface SynteticMonitoringCheckSettingsTcp {
    ipVersion?: pulumi.Input<string>;
    queryResponses?: pulumi.Input<pulumi.Input<inputs.SynteticMonitoringCheckSettingsTcpQueryResponse>[]>;
    sourceIpAddress?: pulumi.Input<string>;
    tls?: pulumi.Input<boolean>;
    tlsConfig?: pulumi.Input<inputs.SynteticMonitoringCheckSettingsTcpTlsConfig>;
}

export interface SynteticMonitoringCheckSettingsTcpQueryResponse {
    expect: pulumi.Input<string>;
    send: pulumi.Input<string>;
    startTls?: pulumi.Input<boolean>;
}

export interface SynteticMonitoringCheckSettingsTcpTlsConfig {
    caCert?: pulumi.Input<string>;
    clientCert?: pulumi.Input<string>;
    clientKey?: pulumi.Input<string>;
    insecureSkipVerify?: pulumi.Input<boolean>;
    serverName?: pulumi.Input<string>;
}
