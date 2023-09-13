export type Endpoint = {
  Id: string;
  Name: string;
};

export interface DockerContainer {
  Command: string;
  Created: number;
  HostConfig: HostConfig;
  Id: string;
  Image: string;
  ImageID: string;
  Labels: Labels;
  Mounts: Mount[];
  Names: string[];
  NetworkSettings: NetworkSettings;
  Ports: Port[];
  State: string;
  Status: string;
  IsPortainer?: boolean;
  EndpointName?: string;
}

export interface HostConfig {
  NetworkMode: string;
}

export interface Labels {
  "com.docker.compose.config-hash": string;
  "com.docker.compose.container-number": string;
  "com.docker.compose.depends_on": string;
  "com.docker.compose.image": string;
  "com.docker.compose.oneoff": string;
  "com.docker.compose.project": string;
  "com.docker.compose.project.config_files": string;
  "com.docker.compose.project.working_dir": string;
  "com.docker.compose.replace"?: string;
  "com.docker.compose.service": string;
  "com.docker.compose.version": string;
  "desktop.docker.io/binds/0/Source"?: string;
  "desktop.docker.io/binds/0/SourceKind"?: string;
  "desktop.docker.io/binds/0/Target"?: string;
  "desktop.docker.io/binds/1/Source"?: string;
  "desktop.docker.io/binds/1/SourceKind"?: string;
  "desktop.docker.io/binds/1/Target"?: string;
  "space.bitswan.pipeline.protocol-version"?: string;
  src?: string;
  "com.docker.desktop.extension.api.version"?: string;
  "com.docker.desktop.extension.icon"?: string;
  "com.docker.extension.additional-urls"?: string;
  "com.docker.extension.detailed-description"?: string;
  "com.docker.extension.publisher-url"?: string;
  "com.docker.extension.screenshots"?: string;
  "io.portainer.server"?: string;
  "org.opencontainers.image.description"?: string;
  "org.opencontainers.image.title"?: string;
  "org.opencontainers.image.vendor"?: string;
  "desktop.docker.io/binds/2/Source"?: string;
  "desktop.docker.io/binds/2/SourceKind"?: string;
  "desktop.docker.io/binds/2/Target"?: string;
  "desktop.docker.io/binds/3/Source"?: string;
  "desktop.docker.io/binds/3/SourceKind"?: string;
  "desktop.docker.io/binds/3/Target"?: string;
  "devcontainer.config_file"?: string;
  "devcontainer.local_folder"?: string;
  "devcontainer.metadata"?: string;
}

export interface Mount {
  Destination: string;
  Mode: string;
  Propagation: string;
  RW: boolean;
  Source: string;
  Type: string;
  Driver?: string;
  Name?: string;
}

export interface NetworkSettings {
  Networks: Networks;
}

export interface Networks {
  "low-setup-example-install_default"?: LowSetupExampleInstallDefault;
}

export interface LowSetupExampleInstallDefault {
  Aliases: string[] | null; // TODO: Check returned value
  DriverOpts: null; // TODO: Check returned value
  EndpointID: string;
  Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  IPAMConfig: null; // TODO: Check returned value
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  Links: null; // TODO: Check returned value
  MacAddress: string;
  NetworkID: string;
}

export interface Port {
  PrivatePort: number;
  Type: string;
  IP?: string;
  PublicPort?: number;
}

export type PortainerError = {
  message: string | null;
};

export interface Pipeline {
  id: string;
  name: string;
  machineName: string;
  dateCreated: string;
  upTime: string;
  status: string;
}

export interface PipelineStat {
  result: string;
  table: number;
  _start: string;
  _stop: string;
  _time: string;
  _value: number;
  _field: string;
  _measurement: string;
  appclass: string;
  host: string;
  pipeline: string;
}

export type PipelineWithStats = Pipeline & {
  pipelineStat: PipelineStat[];
};