## Classes

<dl>
<dt><a href="#ParseException">ParseException</a></dt>
<dd></dd>
<dt><a href="#Boolean">Boolean</a></dt>
<dd></dd>
<dt><a href="#Config">Config</a></dt>
<dd></dd>
<dt><a href="#Enum">Enum</a></dt>
<dd></dd>
<dt><a href="#Types">Types</a></dt>
<dd></dd>
<dt><a href="#Int">Int</a></dt>
<dd></dd>
<dt><a href="#String">String</a></dt>
<dd></dd>
<dt><a href="#Type">Type</a></dt>
<dd></dd>
</dl>

<a name="ParseException"></a>

## ParseException
**Kind**: global class  
<a name="new_ParseException_new"></a>

### new ParseException()
A parsing error

<a name="Boolean"></a>

## Boolean
**Kind**: global class  

* [Boolean](#Boolean)
    * [new Boolean()](#new_Boolean_new)
    * [~Parse(options, value)](#Boolean..Parse) ⇒ <code>boolean</code>
    * [~Options](#Boolean..Options) : [<code>Options</code>](#Type..Options)

<a name="new_Boolean_new"></a>

### new Boolean()
Boolean Type

<a name="Boolean..Parse"></a>

### Boolean~Parse(options, value) ⇒ <code>boolean</code>
Boolean Type Parser

**Kind**: inner method of [<code>Boolean</code>](#Boolean)  
**Returns**: <code>boolean</code> - Value  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>Options</code>](#Boolean..Options) | Options |
| value | <code>string</code> | Value passed in by ENV |

<a name="Boolean..Options"></a>

### Boolean~Options : [<code>Options</code>](#Type..Options)
Boolean Parser Options

**Kind**: inner typedef of [<code>Boolean</code>](#Boolean)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| trueValues | <code>Array.&lt;string&gt;</code> | Specifies all the values that could be used instead of "true" |
| default | <code>boolean</code> | Default value |

<a name="Config"></a>

## Config
**Kind**: global class  

* [Config](#Config)
    * [new Config()](#new_Config_new)
    * [~Parse(options, value)](#Config..Parse) ⇒ <code>Object</code>
    * [~Options](#Config..Options) : [<code>Options</code>](#Type..Options)

<a name="new_Config_new"></a>

### new Config()
Config Type

<a name="Config..Parse"></a>

### Config~Parse(options, value) ⇒ <code>Object</code>
Config Type Parser

**Kind**: inner method of [<code>Config</code>](#Config)  
**Returns**: <code>Object</code> - Returns an object containing the config of the children  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>Options</code>](#Config..Options) | Options |
| value | <code>Object</code> | Value passed in as ENV |

<a name="Config..Options"></a>

### Config~Options : [<code>Options</code>](#Type..Options)
Confit Parser Options

**Kind**: inner typedef of [<code>Config</code>](#Config)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| config | [<code>Array.&lt;Options&gt;</code>](#Type..Options) | Array of other objects to contain under this one |

<a name="Enum"></a>

## Enum
**Kind**: global class  

* [Enum](#Enum)
    * [new Enum()](#new_Enum_new)
    * [~Parse(options, value)](#Enum..Parse) ⇒ <code>string</code>
    * [~Options](#Enum..Options) : [<code>Options</code>](#Type..Options)

<a name="new_Enum_new"></a>

### new Enum()
Enum Type

<a name="Enum..Parse"></a>

### Enum~Parse(options, value) ⇒ <code>string</code>
Enum Type Parser

**Kind**: inner method of [<code>Enum</code>](#Enum)  
**Returns**: <code>string</code> - Value parsed in after validation  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>Options</code>](#Enum..Options) | Options |
| value | <code>string</code> | Value passed in by ENV |

<a name="Enum..Options"></a>

### Enum~Options : [<code>Options</code>](#Type..Options)
Enum Parser Options

**Kind**: inner typedef of [<code>Enum</code>](#Enum)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| values | <code>string</code> | Possible vales for the enum |
| default | <code>string</code> | Default value |

<a name="Types"></a>

## Types
**Kind**: global class  

* [Types](#Types)
    * [new Types()](#new_Types_new)
    * [~Parse(options, value)](#Types..Parse) ⇒ <code>\*</code>

<a name="new_Types_new"></a>

### new Types()
Everything about types

<a name="Types..Parse"></a>

### Types~Parse(options, value) ⇒ <code>\*</code>
Universally parses any type from a string to the value

**Kind**: inner method of [<code>Types</code>](#Types)  
**Returns**: <code>\*</code> - Parsed Value  

| Param | Type |
| --- | --- |
| options | [<code>Options</code>](#Type..Options) | 
| value | <code>string</code> | 

<a name="Int"></a>

## Int
**Kind**: global class  

* [Int](#Int)
    * [new Int()](#new_Int_new)
    * [~Parse(options, value)](#Int..Parse) ⇒ <code>number</code>

<a name="new_Int_new"></a>

### new Int()
Int Type

<a name="Int..Parse"></a>

### Int~Parse(options, value) ⇒ <code>number</code>
Int Type Parser

**Kind**: inner method of [<code>Int</code>](#Int)  
**Returns**: <code>number</code> - Value  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Int~Options</code> | Options |
| value | <code>string</code> | Value passed in by ENV |

<a name="String"></a>

## String
**Kind**: global class  

* [String](#String)
    * [new String()](#new_String_new)
    * [~Parse(options, value)](#String..Parse) ⇒ <code>string</code>
    * [~Options](#String..Options) : [<code>Options</code>](#Type..Options)
    * [~Options](#String..Options) : [<code>Options</code>](#Type..Options)

<a name="new_String_new"></a>

### new String()
String Type

<a name="String..Parse"></a>

### String~Parse(options, value) ⇒ <code>string</code>
String Type Parser

**Kind**: inner method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - Value  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>Options</code>](#String..Options) | Options |
| value | <code>string</code> | Value passed in by ENV |

<a name="String..Options"></a>

### String~Options : [<code>Options</code>](#Type..Options)
Int Parser Options

**Kind**: inner typedef of [<code>String</code>](#String)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| default | <code>string</code> | Default value |

<a name="String..Options"></a>

### String~Options : [<code>Options</code>](#Type..Options)
String Parser Options

**Kind**: inner typedef of [<code>String</code>](#String)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| default | <code>string</code> | Default value |

<a name="Type"></a>

## Type
**Kind**: global class  

* [Type](#Type)
    * [new Type()](#new_Type_new)
    * [~Parse(options, value)](#Type..Parse) ⇒ <code>null</code>
    * [~Options](#Type..Options) : <code>Object</code>

<a name="new_Type_new"></a>

### new Type()
Base Type

<a name="Type..Parse"></a>

### Type~Parse(options, value) ⇒ <code>null</code>
Basic Type Parser

**Kind**: inner method of [<code>Type</code>](#Type)  
**Returns**: <code>null</code> - - Returns null as this is an interface and not an implementation  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>Options</code>](#Type..Options) | Options |
| value | <code>Object</code> | Value passed in by ENV |

<a name="Type..Options"></a>

### Type~Options : <code>Object</code>
Basic Type Options

**Kind**: inner typedef of [<code>Type</code>](#Type)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| env | <code>string</code> | Environment Variable name to map this to |
| mapping | <code>string</code> | Key to map this in the config object to |
| type | <code>string</code> |  |

