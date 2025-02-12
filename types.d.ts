interface _IApiConfig<T = any> {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    data?: T | null;
    toast?: boolean;
    callbackUrl?: string;
    // headers?: _IAxiosHeaders;
  }
  
  interface _IPostApiResponse {
    statusCode: number;
    message: string;
  }
  
  interface _IApiResponse<T> extends _IPostApiResponse {
    data: T;
  }
  
  interface _IAxiosHeaders {
    [key: string]: string;
  }
  
  interface _IAccount {
    first_name: string | null;
    last_name: string | null;
    phone_number: string | null;
    state: string | null;
    area: string | null;
    pincode: string | null;
  }
  
  interface _IAddress {
    _id: string;
    city: string;
    latitude: number;
    longitude: number;
    state: string;
    country: string;
  }
  
  interface _IDetail {
    /**
     * The key of the data object to be used for this input field.
     * It should correspond to a property in the data object provided.
     *
     * @type {string}
     * @memberof Detail
     */
    id: string;
  
    /**
     * The placeholder text to be shown inside the input field.
     *
     * @type {string}
     * @memberof Detail
     */
    placeholder?: string;
  
    /**
     * The value to be shown inside the input field.
     *
     * @type {string}
     * @memberof Detail
     */
    value?: string;
  
    /**
     * The label to be displayed alongside the input field.
     * This provides a description or name for the field.
     *
     * @type {string}
     * @memberof Detail
     */
    label: string;
  
    width?: string;
  
    bg?: string;
  
    /**
     * The label to be displayed alongside the input field.
     * This provides a description or name for the field.
     *
     * @type {string}
     * @memberof Detail
     */
    input_type?: "select" | "radio" | "textarea";
    // input_type?: "select" | "radio";
  
    /**
     * Optional icon to be displayed within the input field.
     * Can be used to visually represent the field's purpose.
     *
     * @type {any}
     * @memberof Detail
     */
    icon?: string;
  
    onChange?: any;
  
    /**
     * Optional options to be rendered for select input field.
     *
     * @type {any}
     * @memberof Detail
     */
    options?: string[];
  
    /**
     * Optional radios to be rendered for radio input field.
     *
     * @type {any}
     * @memberof Detail
     */
    radio?: _IRadio[];
  
    /**
     * The type of the input field (e.g., "text", "password").
     * Defines the kind of data the input field expects.
     *
     * @type {string}
     * @memberof Detail
     */
    type: string;
  
    /**
     * Whether the input field should be disabled.
     * This can be used to prevent editing of certain fields.
     *
     * @type {boolean}
     * @memberof Detail
     */
    disabled?: boolean;
  
    /**
     * Whether the input field should be given a resonable margin top.
     * @type {boolean}
     * @memberof Detail
     */
    mt?: boolean;
  
    /**
     * Optional tooltip to provide additional information about the input field.
     * Useful for giving users hints or guidance.
     *
     * @type {boolean}
     * @memberof Detail
     */
    tooltip?: boolean;
  
    /**
     * New optional property to define the group
     *
     * @type {any}
     * @memberof Detail
     */
    group?: string; //
  
    /**
     * Optional errors to show to the user
     *
     * @type {any}
     * @memberof Detail
     */
    errors?: Record<string, string[] | undefined> | null;
  }
  
  interface _IChildren {
    children: React.ReactNode;
  }

  interface _IFetchRes<T> {
    data: T;
  }
  
  interface _IId {
    id: string;
  }
  
  interface _ILoginResponse {
    tokens: _ITokens;
    user: _ILogin;
  }
  
  interface _IRegisterResponse {
    email: string;
    userType: string;
  }
  
  interface _ILogin extends _IRegisterResponse {
    _id: string;
  }
  
  interface _IQuery {
    query: string;
    page: string;
    num_pages: string;
  }
  
  interface _IRefresh {
    tokens: _ITokens;
  }
  
  interface _ITipsData {
    title: string;
    description: string;
    image: string;
  }
  
  interface _IToast {
    id: string;
    message: string;
    type: "success" | "error" | "info" | "warning";
  }
  
  interface _ITokens {
    access_token: string;
    refresh_token: string;
    expiresIn: number;
  }
  
  interface _IVehicle {
    _id: string;
    vehicle_no: string;
    isVerified: boolean;
    hasSlot: boolean;
    images: Array<_TVehicleImage>;
    driver: string;
  }
  
  interface _IVerifyUser {
    _id: string;
    email: string;
    user_image: string | null;
    first_name: string | null;
    last_name: string | null;
    phone_number: string | null;
    area: string | null;
    state: string | null;
    pincode: string | null;
  }
  
  interface _IUser {
    _id: string;
    email: string;
    userType: _TUserType;
    image: any;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
    profile: any;
    vehicles: any[];
    centers: any[];
  }
  
  type _TUserType = 'Customer' | 'ParkOwner';
  
  interface _Image {
    _id: string;
    file_id: string;
    filename: string;
    mimetype: string;
  }
  
  interface _IDestination {
    location: {
      lat: number;
      lng: number;
    };
    description: string;
  }
  
  interface SearchParamsKeys {
    [key: string]: string;
  }