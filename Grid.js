Type.registerNamespace('Ajax.Controls');

Ajax.Controls.GridColumn = function (headerText, dataField, formatString, sortable, sortField, filter, filterField, filterIcon, editable, insertable, useCalendar, useCheckbox, validationFunction, visible, maxLength, allowDragAndDrop, headerHorizontalAlign, headerVerticalAlign, horizontalAlign, verticalAlign, width, nowrap) {
    this.headerText = headerText;
    this.dataField = dataField;
    this.formatString = formatString;
    this.sortable = sortable;
    this.sortField = sortField;
    this.filter = Ajax.Controls.GridFilterType[filter];
    this.filterField = filterField;
    this.filterIcon = Ajax.Controls.FilterIconType[filterIcon];
    this.editable = editable;
    this.insertable = insertable;
    this.useCalendar = useCalendar;
    this.useCheckbox = useCheckbox;
    this.validationFunction = validationFunction;
    this.visible = visible;
    this.maxLength = maxLength;
    this.allowDragAndDrop = allowDragAndDrop;
    this.headerHorizontalAlign = headerHorizontalAlign;
    this.headerVerticalAlign = headerVerticalAlign;
    this.horizontalAlign = horizontalAlign;
    this.verticalAlign = verticalAlign;
    this.width = width;
    this.nowrap = nowrap;

    if (this.sortable) {
        if ((this.sortField == null) || (this.sortField.length == 0)) {
            this.sortField = this.dataField;
        }
    }

    if (this.filter) {
        if ((this.filterField == null) || (this.filterField.length == 0)) {
            this.filterField = this.dataField;
        }
    }

    // It doesn't make sense to have a column that can have an edit input box but cannot have an insert input box
    if (this.editable) {
        this.insertable = true;
    }

    this.$header = null; //Start with $ prefix so that it does not includes in the Serialization used by the JavaScriptSerializer.
}

Ajax.Controls.GridColumn.prototype = {
    get_visible: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this.visible;
    },

    set_visible: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;
        this.visible = value;
    },

    get_headerText: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this.headerText;
    },

    set_headerText: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;
        this.headerText = value;
    }
}

Ajax.Controls.GridColumn.registerClass('Ajax.Controls.GridColumn');


Ajax.Controls.GridColumnDragStartEventArgs = function(column)
{
    Ajax.Controls.GridColumnDragStartEventArgs.initializeBase(this);
    this._column = column;
}

Ajax.Controls.GridColumnDragStartEventArgs.prototype =
{
    get_column : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._column;
    }
}

Ajax.Controls.GridColumnDragStartEventArgs.registerClass('Ajax.Controls.GridColumnDragStartEventArgs', Sys.EventArgs);


Ajax.Controls.GridColumnDroppedEventArgs = function(column, oldIndex, newIndex)
{
    Ajax.Controls.GridColumnDroppedEventArgs.initializeBase(this);
    this._column = column;
    this._oldIndex = oldIndex;
    this._newIndex = newIndex;
}

Ajax.Controls.GridColumnDroppedEventArgs.prototype =
{
    get_column : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._column;
    },

    get_oldIndex : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._oldIndex;
    },

    get_newIndex : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._newIndex;
    }
}

Ajax.Controls.GridColumnDroppedEventArgs.registerClass('Ajax.Controls.GridColumnDroppedEventArgs', Sys.EventArgs);


Ajax.Controls.GridSortOrder = function()
{
    throw Error.notImplemented();
}

Ajax.Controls.GridSortOrder.prototype =
{
    None : 0,
    Ascending : 1,
    Descending : 2
}

Ajax.Controls.GridSortOrder.registerEnum('Ajax.Controls.GridSortOrder');


Ajax.Controls.GridSortEventArgs = function(sortColumn, sortOrder)
{
    Ajax.Controls.GridSortEventArgs.initializeBase(this);
    this._sortColumn = sortColumn;
    this._sortOrder = sortOrder;
}

Ajax.Controls.GridSortEventArgs.prototype =
{
    get_sortColumn : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._sortColumn;
    },

    get_sortOrder : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._sortOrder;
    }
}

Ajax.Controls.GridSortEventArgs.registerClass('Ajax.Controls.GridSortEventArgs', Sys.EventArgs);


Ajax.Controls.GridFilterType = function() {
    throw Error.notImplemented();
}

Ajax.Controls.GridFilterType.prototype =
{
    None: 0,
    Normal: 1,
    AutoFilterOnly: 2,
    TextFilterOnly: 3
}

Ajax.Controls.GridFilterType.registerEnum('Ajax.Controls.GridFilterType');

Ajax.Controls.FilterIconType = function() {
    throw Error.notImplemented();
}

Ajax.Controls.FilterIconType.prototype =
{
    Default: 0,
    MagnifyingGlass: 1,
    DropDown: 2,
    Custom: 3
}

Ajax.Controls.FilterIconType.registerEnum('Ajax.Controls.FilterIconType');

Ajax.Controls.GridFilterEventType = function()
{
    throw Error.notImplemented();
}

Ajax.Controls.GridFilterEventType.prototype =
{
    FilterOpen : 0,
    FilterClose : 1,
    FilterApply : 2
}

Ajax.Controls.GridFilterEventType.registerEnum('Ajax.Controls.GridFilterEventType');


Ajax.Controls.GridFilterEventArgs = function(filterColumn, filterField, filterValue, eventType)
{
    Ajax.Controls.GridFilterEventArgs.initializeBase(this);
    this._filterColumn = filterColumn;
    this._filterField = filterField;
    this._filterValue= filterValue;
    this._eventType= eventType;
}

Ajax.Controls.GridFilterEventArgs.prototype =
{
    get_filterColumn : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._filterColumn;
    },

    get_filterField : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._filterField;
    },
    
    get_filterValue : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._filterValue;
    },
    
    get_eventType : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._eventType;
    }
}

Ajax.Controls.GridFilterEventArgs.registerClass('Ajax.Controls.GridFilterEventArgs', Sys.EventArgs);

Ajax.Controls.GridCommandEventArgs = function(commandName, commandArgument)
{
    Ajax.Controls.GridCommandEventArgs.initializeBase(this);
    this._commandName = commandName;
    this._commandArgument = commandArgument;
    this._updateGrid = false;
}

Ajax.Controls.GridCommandEventArgs.prototype =
{
    get_commandName : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._commandName;
    },

    get_commandArgument : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._commandArgument;
    },
    
    get_updateGrid : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._updateGrid;
    },
    
    set_updateGrid : function(value)
    {
        var e = Function._validateParams(arguments, [{name: 'value', type: Boolean}]);
        if (e) throw e;
        this._updateGrid = value;
    }
}

Ajax.Controls.GridCommandEventArgs.registerClass('Ajax.Controls.GridCommandEventArgs', Sys.EventArgs);


Ajax.Controls.GridRowDataBoundEventArgs = function(tableRow, dataItem)
{
    Ajax.Controls.GridRowDataBoundEventArgs.initializeBase(this);
    this._tableRow = tableRow;
    this._dataItem = dataItem;
}

Ajax.Controls.GridRowDataBoundEventArgs.prototype =
{
    get_tableRow : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._tableRow;
    },

    get_dataItem : function()
    {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._dataItem;
    }
}

Ajax.Controls.GridRowDataBoundEventArgs.registerClass('Ajax.Controls.GridRowDataBoundEventArgs', Sys.EventArgs);

// eventType: "check" or "uncheck"
// value: checked row's key
// index: checked row's index
// cancel: set to "true" to cancel the check. Only used for select checkbox. Not used on data checkbox.
// checkBox: checkbox element. Only used for data checkbox. Not used on select checkbox.
// dataField: DataField bound to the data checkbox. Not used on select checkbox.
Ajax.Controls.GridCheckEventArgs = function(eventType, value, index, cancel, checkBox, dataField) {
    Ajax.Controls.GridCheckEventArgs.initializeBase(this);
    this._eventType = eventType;
    this._value = value;
    this._index = index;
    this._cancel = cancel;
    this._checkBox = checkBox;
    this._dataField = dataField;
}

Ajax.Controls.GridCheckEventArgs.prototype =
{
    get_eventType: function() {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._eventType;
    },

    get_value: function() {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._value;
    },

    get_index: function() {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._index;
    },

    get_cancel: function() {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._cancel;
    },

    set_cancel: function(value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;
        this._cancel = value;
    },

    get_checkBox: function() {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._checkBox;
    },

    get_dataField: function() {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._dataField;
    }
}

Ajax.Controls.GridCheckEventArgs.registerClass('Ajax.Controls.GridCheckEventArgs', Sys.EventArgs);

Ajax.Controls.Grid = function(element) {
    Ajax.Controls.Grid.initializeBase(this, [element]);
    this._border = -1;
    this._cellPadding = -1;
    this._cellSpacing = -1;
    this._cssClass = 'ajax_grid';

    this._headerCssClass = '';
    this._rowCssClass = '';
    this._alternatingRowCssClass = '';
    this._selectedRowCssClass = '';

    this._selectByClick = false;
    this._selectByUpDownKeys = false;

    this._addCheckBoxes = false;
    this._addCheckAllHeader = true;
    this._checkBoxHeaderText = 'Select';
    this._checkedValues = new Object();
    this._checkedDataObjects = new Array();
    this._checkedAll = false;
    this._checkAllCheckBox = null;

    this._fixedHeader = false;

    this._initSortColumn = '';
    this._initSortOrder = null;
    this._sortColumn = '';
    this._sortOrder = Ajax.Controls.GridSortOrder.Ascending;

    this._sortOrderAscendingImage = '';
    this._sortOrderDescendingImage = '';
    this._filterIconCustomImage = '';

    this._dataKeyName = '';
    this._dataKeyNames = new Array();
    this._emptyDataText = 'No records found.';

    this._columns = null;
    this._dataSource = null;

    this._headerRow = null;

    this._tableRows = new Array();
    this._selectedIndex = -1;
    this._selectedValue = null;
    this._selectedDataObject = null;

    this._links = new Array();
    this._linkHandlers = new Array();

    this._keyDownElements = new Array();
    this._keyDownHandlers = new Array();

    this._tbodyDblClickHandler = null;
    this._tbodyRightClickHandler = null;
    this._tbody = null;

    this._isInDrag = false;
    this._posY = 0;
    this._posX = 0;
    this._draggingTable = null;
    this._draggingColumnIndex = -1;
    this._headers = new Array();
    this._dragHandlers = new Array();
    this._mouseUpHandler = null;
    this._documentMouseMoveHandler = null;
    this._documentMouseUpHandler = null;

    this._updateProgressDiv = null;
    this._filterDivs = new Object();
    this._filterDivClickHandlers = new Object();
    this._filterDivScrollHandlers = new Object();
    this._filterListLoadAllHandlers = new Object();
    this._filterTextKeyDownHandlers = new Object();
    this._filterCheckBoxHandlers = new Object();
    this._filter = new Object();
    this._unfilteredDataSource = null;
    this._customFilterStyleAdded = false;
    this._tableContainer = null;
    this._tableContainerScrollHandler = null;
    this._documentClickHandler = null;

    this._addMode = false;
}

Ajax.Controls.Grid.prototype =
{
    get_border: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._border;
    },

    set_border: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Number}]);
        if (e) throw e;

        if (this._border != value) {
            this._border = value;
            this.raisePropertyChanged('border');
        }
    },

    get_cellPadding: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._cellPadding;
    },

    set_cellPadding: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Number}]);
        if (e) throw e;

        if (this._cellPadding != value) {
            this._cellPadding = value;
            this.raisePropertyChanged('cellPadding');
        }
    },

    get_cellSpacing: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._cellSpacing;
    },

    set_cellSpacing: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Number}]);
        if (e) throw e;

        if (this._cellSpacing != value) {
            this._cellSpacing = value;
            this.raisePropertyChanged('cellSpacing');
        }
    },

    get_cssClass: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._cssClass;
    },

    set_cssClass: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._cssClass != value) {
            this._cssClass = value;
            this.raisePropertyChanged('cssClass');
        }
    },

    get_headerCssClass: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._headerCssClass;
    },

    set_headerCssClass: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._headerCssClass != value) {
            this._headerCssClass = value;
            this.raisePropertyChanged('headerCssClass');
        }
    },

    get_rowCssClass: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._rowCssClass;
    },

    set_rowCssClass: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._rowCssClass != value) {
            this._rowCssClass = value;
            this.raisePropertyChanged('rowCssClass');
        }
    },

    get_alternatingRowCssClass: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._alternatingRowCssClass;
    },

    set_alternatingRowCssClass: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._alternatingRowCssClass != value) {
            this._alternatingRowCssClass = value;
            this.raisePropertyChanged('alternatingRowCssClass');
        }
    },

    get_selectedRowCssClass: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._selectedRowCssClass;
    },

    set_selectedRowCssClass: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._selectedRowCssClass != value) {
            this._selectedRowCssClass = value;
            this.raisePropertyChanged('selectedRowCssClass');
        }
    },

    get_selectByClick: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._selectByClick;
    },

    set_selectByClick: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;

        if (this._selectByClick != value) {
            this._selectByClick = value;
            this.raisePropertyChanged('selectByClick');
        }
    },

    get_selectByUpDownKeys: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._selectByUpDownKeys;
    },

    set_selectByUpDownKeys: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;

        if (this._selectByUpDownKeys != value) {
            this._selectByUpDownKeys = value;
            this.raisePropertyChanged('selectByUpDownKeys');
        }
    },

    get_addCheckBoxes: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._addCheckBoxes;
    },

    set_addCheckBoxes: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;

        if (this._addCheckBoxes != value) {
            this._addCheckBoxes = value;
            this.raisePropertyChanged('addCheckBoxes');
        }
    },

    get_addCheckAllHeader: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._addCheckAllHeader;
    },

    set_addCheckAllHeader: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;

        if (this._addCheckAllHeader != value) {
            this._addCheckAllHeader = value;
            this.raisePropertyChanged('addCheckAllHeader');
        }
    },

    get_checkBoxHeaderText: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._checkBoxHeaderText;
    },

    set_checkBoxHeaderText: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._checkBoxHeaderText != value) {
            this._checkBoxHeaderText = value;
            this.raisePropertyChanged('checkBoxHeaderText');
        }
    },

    get_fixedHeader: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._fixedHeader;
    },

    set_fixedHeader: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Boolean}]);
        if (e) throw e;

        if (this._fixedHeader != value) {
            this._fixedHeader = value;
            this.raisePropertyChanged('fixedHeader');
        }
    },

    get_dataKeyName: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._dataKeyName;
    },

    set_dataKeyName: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        value = value.replace(" ", "");
        if (this._dataKeyName != value) {
            this._dataKeyName = value;
            this._dataKeyNames = value.split(",");
            this.raisePropertyChanged('dataKeyName');
        }
    },

    get_emptyDataText: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._emptyDataText;
    },

    set_emptyDataText: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._dataSource != value) {
            this._emptyDataText = value;
            this.raisePropertyChanged('emptyDataText');
        }
    },

    get_sortColumn: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._sortColumn;
    },

    set_sortColumn: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._initSortColumn == "")
            this._initSortColumn = value;

        if (this._sortColumn != value) {
            this._sortColumn = value;
            this.raisePropertyChanged('sortColumn');
        }
    },

    get_sortOrder: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._sortOrder;
    },

    set_sortOrder: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Ajax.Controls.GridSortOrder}]);
        if (e) throw e;

        if (this._initSortOrder == null)
            this._initSortOrder = value;

        if (this._sortOrder != value) {
            this._sortOrder = value;
            this.raisePropertyChanged('sortOrder');
        }
    },

    get_sortOrderAscendingImage: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        if (this._sortOrderAscendingImage != null && this._sortOrderAscendingImage.length > 0)
            return this._sortOrderAscendingImage;
        else
            // When updgrading to ASP.NET 4.0 or higher add "/" prefix (ex. '/<%= WebResource(..)%>') to get the WebResource from the root directory. Otherwise it tries to get it from the *.aspx directory and it fails when used in .NET 4.0. 
            return '<%= WebResource("Ajax.Controls.Grid.iconAsc.png")%>';
    },

    set_sortOrderAscendingImage: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._sortOrderAscendingImage != value) {
            this._sortOrderAscendingImage = value;
            this.raisePropertyChanged('sortOrderAscendingImage');
        }
    },

    get_sortOrderDescendingImage: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        if (this._sortOrderDescendingImage != null && this._sortOrderDescendingImage.length > 0)
            return this._sortOrderDescendingImage;
        else
            // When updgrading to ASP.NET 4.0 or higher add "/" prefix (ex. '/<%= WebResource(..)%>') to get the WebResource from the root directory. Otherwise it tries to get it from the *.aspx directory and it fails when used in .NET 4.0. 
            return '<%= WebResource("Ajax.Controls.Grid.iconDesc.png")%>';
    },

    set_sortOrderDescendingImage: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._sortOrderDescendingImage != value) {
            this._sortOrderDescendingImage = value;
            this.raisePropertyChanged('sortOrderDescendingImage');
        }
    },

    get_filterIconCustomImage: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        if (this._filterIconCustomImage != null && this._filterIconCustomImage.length > 0)
            return this._filterIconCustomImage;
        else
            // When updgrading to ASP.NET 4.0 or higher add "/" prefix (ex. '/<%= WebResource(..)%>') to get the WebResource from the root directory. Otherwise it tries to get it from the *.aspx directory and it fails when used in .NET 4.0. 
            return '<%= WebResource("Ajax.Controls.Grid.filter_icons.png")%>';
    },

    set_filterIconCustomImage: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: String}]);
        if (e) throw e;

        if (this._filterIconCustomImage != value) {
            this._filterIconCustomImage = value;
            this.raisePropertyChanged('filterIconCustomImage');
        }
    },

    get_filterable: function () {
        for (i = 0; i < this._columns.length; i++) {
            if (this._columns[i].filter && this._columns[i].visible) {
                return true;
            }
        }

        return false;
    },

    get_filterDiv: function (filterColumn) {
        return this._filterDivs[filterColumn];
    },

    get_activeFilterCount: function () {
        var i = 0;
        for (var prop in this._filter) {
            i++
        }
        return i;
    },

    get_filter: function () {
        return this._filter;
    },

    get_columns: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._columns;
    },

    set_columns: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Array, elementType: Ajax.Controls.GridColumn, elementMayBeNull: false}]);
        if (e) throw e;

        if (this._columns != value) {
            this._columns = value;
            this.raisePropertyChanged('columns');
        }
    },

    get_visibleColumnsLength: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        var count = this.get_addCheckBoxes() ? 1 : 0;
        for (var i = 0; i < this._columns.length; i++)
            if (this._columns[i].visible) count++;

        return count;
    },

    get_column: function (dataField) {
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].dataField == dataField)
                return this._columns[i];
        }
        return null;
    },

    // 1 based column index that matches the DataField
    get_columnIndex: function (dataField) {
        var count = this.get_addCheckBoxes() ? 2 : 1;
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].dataField == dataField)
                return count;

            if (this._columns[i].visible) count++;
        }
        return null;
    },

    // 0 based column index that matches the header cell index
    get_columnIndexFromHeaderIndex: function (headerIndex) {
        var count = this.get_addCheckBoxes() ? 1 : 0;
        for (var i = 0; i < this._columns.length; i++) {
            if (this._columns[i].visible) {
                if (count++ == headerIndex)
                    return i;
            }
        }
        return null;
    },

    get_dataSource: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._dataSource;
    },

    set_dataSource: function (value) {
        var e = Function._validateParams(arguments, [{ name: 'value', type: Array, mayBeNull: true}]);
        if (e) throw e;

        if (this._dataSource != value) {
            this._dataSource = value;
            // New data source is set, so clear any backed up data source when the built-in filter is used
            this._unfilteredDataSource = null;
            this.raisePropertyChanged('dataSource');
        }
    },

    get_headerRow: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._headerRow;
    },

    get_checkAllCheckBox: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._checkAllCheckBox;
    },

    get_dataRows: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._tableRows;
    },

    get_selectedValue: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._selectedValue;
    },

    set_selectedValue: function (value) {
        this._selectedValue = value;
    },

    get_selectedDataObject: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._selectedDataObject;
    },

    set_selectedDataObject: function (value) {
        this._selectedDataObject = value;
    },

    get_selectedRow: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        if ((this.get_dataRows() == null) || (this.get_dataRows().length == 0)) {
            return null;
        }

        if (this._selectedIndex > -1) {
            return this.get_dataRows()[this._selectedIndex];
        }

        return null;
    },

    get_selectedIndex: function () {
        return this._selectedIndex;
    },

    get_checkedValues: function () {
        if (arguments.length !== 0) throw Error.parameterCount();
        return this._checkedValues;
    },

    get_checkedDataObjects: function () {
        return this._checkedDataObjects;
    },

    get_checkedAll: function () {
        if (arguments.length !== 0) throw Error.parameterCount();

        return this._checkedAll;
    },

    set_checkedAll: function (value) {
        this._checkedAll = value;
    },

    get_dataKey: function (index) {
        if (index > -1)
            return this._getDataKey(this._dataSource[index]);
        else
            return null;
    },

    get_dataObject: function (index) {
        var returnVal;
        try {
            if (index > -1)
                returnVal = this._dataSource[index];
        }
        catch (e) {
            returnVal = null;
        }
        return returnVal;
    },

    set_dataObject: function (index, dataObj) {
        if (index > -1)
            this._dataSource[index] = dataObj;
    },

    get_indexFromDataKey: function (dataKey) {
        if (this._dataSource) {
            for (var i = 0; i < this._dataSource.length; i++) {
                if (dataKey == this._getDataKey(this._dataSource[i]))
                    return i;
            }
        }
        return -1;
    },

    initialize: function () {
        Ajax.Controls.Grid.callBaseMethod(this, 'initialize');

        var table = this.get_element();
        this._tableContainer = table.parentNode;
        var columns = this.get_columns();
        var column;
        var i = 0;
        var allowDragAndDrop = false;

        if ((columns != null) && (columns.length > 0)) {
            //Columns Collection specified so we have to check if any of the column has allowDragAndDrop
            //to hook some of the required events for drag and drop
            for (i = 0; i < columns.length; i++) {
                if (columns[i].allowDragAndDrop && columns[i].visible) {
                    allowDragAndDrop = true;
                    break;
                }
            }
        }

        if (allowDragAndDrop) {
            //Supports Column Drag and Drop we have to hook few required events
            this._documentMouseMoveHandler = Function.createDelegate(this, this._onDocumentMouseMove);
            $addHandler(document, 'mousemove', this._documentMouseMoveHandler);

            this._documentMouseUpHandler = Function.createDelegate(this, this._onOtherMouseUp);
            $addHandler(document, 'mouseup', this._documentMouseUpHandler);

            this._mouseUpHandler = Function.createDelegate(this, this._onOtherMouseUp);
            $addHandler(table, 'mouseup', this._mouseUpHandler);

            //The Following will prevent the content selection while dragging

            if (typeof table.style.userSelect != 'undefined') // IE is suppose to support it
            {
                table.style.userSelect = 'none';
            }

            if (typeof table.style.MozUserSelect != 'undefined') // Both Firefox and Opera is suppose to support it
            {
                table.style.MozUserSelect = 'none';
            }

            if (typeof table.style.KhtmlUserSelect != 'undefined') // Safari suppose to support it
            {
                table.style.KhtmlUserSelect = 'none';
            }
        }

        //Applying some basic properties
        if (this.get_border() > -1) {
            table.border = this.get_border().toString();
        }

        if (this.get_cellPadding() > -1) {
            table.cellPadding = this.get_cellPadding().toString();
        }

        if (this.get_cellSpacing() > -1) {
            table.cellSpacing = this.get_cellSpacing().toString();
        }

        //Apply the Css class if specified for the table
        if ((this.get_cssClass() != null) && (this.get_cssClass().length > 0)) {
            Sys.UI.DomElement.addCssClass(table, this.get_cssClass());
        }

        //Need to hook the key down event for selectByUpDownKeys if the option is selected
        if (this.get_selectByUpDownKeys()) {
            var keyDownHandler = Function.createDelegate(this, this._onTableKeyDown);
            $addHandler(this.get_element(), 'keydown', keyDownHandler);
            this._keyDownElements.push(this.get_element());
            this._keyDownHandlers.push(keyDownHandler);
        }

        // Filter related event handlers
        if (this.get_filterable()) {
            // Add event handler to close filter list
            this._documentClickHandler = Function.createDelegate(this, this.hideFilters);
            $addHandler(document, 'click', this._documentClickHandler);

            // Add event handler to move opened filter list when scroll vertically
            this._tableContainerScrollHandler = Function.createDelegate(this, this.tableContainerScrollEvent);
            $addHandler(this._tableContainer, 'scroll', this._tableContainerScrollHandler);
        }

        // Create an update progress indicator which will be used during sorting
        this._updateProgressDiv = document.createElement("div");
        document.forms[0].appendChild(this._updateProgressDiv);
        this._updateProgressDiv.id = table.id + "_updateProgressDiv";
        this._updateProgressDiv.className = "updateProgressAjax_grid";
        this._updateProgressDiv.style.display = "none";
        var messageDiv = document.createElement("div");
        this._updateProgressDiv.appendChild(messageDiv);
        messageDiv.align = "center";
        messageDiv.style.marginTop = "10px";
        var img = document.createElement("img");
        messageDiv.appendChild(img);
        // When updgrading to ASP.NET 4.0 or higher add "/" prefix (ex. '/<%= WebResource(..)%>') to get the WebResource from the root directory. Otherwise it tries to get it from the *.aspx directory and it fails when used in .NET 4.0. 
        img.src = '<%= WebResource("Ajax.Controls.Grid.loader.gif")%>';
        messageDiv.appendChild(document.createTextNode(" "));
        var span = document.createElement("span");
        messageDiv.appendChild(span);
        span.className = "updateProgressMessageAjax_grid";
        span.innerText = "Loading...";
        messageDiv.appendChild(document.createTextNode(" "));
    },

    // Show the update progress message
    // message is optional parameters
    showProgress: function (message, requestElem) {
        message = message ? message : "Loading...";

        var span = (this._updateProgressDiv.getElementsByTagName("span"))[0];
        span.innerText = message;
        requestElem = requestElem ? requestElem : this._tableContainer;  // container of the table
        // make it visible first for the correct calculation of the bound
        this._updateProgressDiv.style.display = '';

        // get the bounds of both the gridview(requesting element) and the progress div
        var gridViewBounds = Sys.UI.DomElement.getBounds(requestElem);
        var updateProgressDivBounds = Sys.UI.DomElement.getBounds(this._updateProgressDiv);

        // center of gridview or requesting element
        var x = gridViewBounds.x + Math.round(gridViewBounds.width / 2) - Math.round(updateProgressDivBounds.width / 2);
        var y = gridViewBounds.y + Math.round(gridViewBounds.height / 2) - Math.round(updateProgressDivBounds.height / 2);

        // set the progress element to this position
        Sys.UI.DomElement.setLocation(this._updateProgressDiv, x, y);
    },

    // Hide the update progress message
    hideProgress: function () {
        // make it invisible
        this._updateProgressDiv.style.display = 'none';
    },

    dispose: function () {
        this._clearOtherMouseHandlers();
        this._clearHeaderHandlers();
        this._clearLinkHandlers();
        this._clearKeyDownHandlers();
        this._clearTBodyHandlers();
        this._clearTableContainerHandlers();
        this._clearDocumentHandlers();
        this._clearFilters();

        delete this._linkHandlers;
        delete this._dragHandlers;
        delete this._keyDownHandlers;

        delete this._tableRows;
        delete this._links;
        delete this._headers;
        delete this._keyDownElements;

        Ajax.Controls.Grid.callBaseMethod(this, 'dispose');
    },

    // Compare two objects.  Used as the compare function for sorting
    _compare: function (rowOne, rowTwo) {
        var rowOneVal = rowOne[this._sortColumn];
        var rowTwoVal = rowTwo[this._sortColumn];
        if (rowOneVal instanceof Date) { // Convert the values to numbers since "==" compares Object references for Date type instead of values
            rowOneVal = rowOneVal ? rowOneVal.getTime() : rowOneVal;
            rowTwoVal = rowTwoVal ? rowTwoVal.getTime() : rowTwoVal;
        }
        if (rowOneVal == rowTwoVal)
            return 0;
        else
            return (this._sortOrder == Ajax.Controls.GridSortOrder.Ascending)
			        ? rowOneVal < rowTwoVal ? -1 : 1
			        : rowOneVal > rowTwoVal ? -1 : 1;
    },

    clearGrid: function (bClearCheckBoxes, bClearSelectedIndex, bClearSorting, bClearFilter) {
        // Default is true
        bClearCheckBoxes = ((bClearCheckBoxes === undefined) || (bClearCheckBoxes == null)) ? true : bClearCheckBoxes;
        // Default is true
        bClearSelectedIndex = ((bClearSelectedIndex === undefined) || (bClearSelectedIndex == null)) ? true : bClearSelectedIndex;
        // Default is true
        bClearSorting = ((bClearSorting === undefined) || (bClearSorting == null)) ? true : bClearSorting;
        // Default is true
        bClearFilter = ((bClearFilter === undefined) || (bClearFilter == null)) ? true : bClearFilter;

        var table = this.get_element();

        //Reseting the module level variables
        this._clearOtherMouseHandlers();
        this._clearHeaderHandlers();
        this._clearLinkHandlers();
        this._clearTBodyHandlers();

        this._tbody = null;
        this._headerRow = null;
        this._checkAllCheckBox = null;
        this._tableRows = new Array();
        if (bClearSelectedIndex) {
            this._selectedIndex = -1;
            this._selectedValue = null;
            this._selectedDataObject = null;
        }
        this._isInDrag = false;
        this._draggingColumnIndex = -1;

        // Reset check boxes
        if (bClearCheckBoxes)
            this.resetCheckedItems();

        // Clear sorting properties
        if (bClearSorting) {
            this._sortColumn = (this._initSortColumn != '') ? this._initSortColumn : '';
            this._sortOrder = (this._initSortOrder != null) ? this._initSortOrder : Ajax.Controls.GridSortOrder.Ascending;
        }

        // Clear filter related properties
        if (bClearFilter) {
            this._clearFilters();
        }

        // Get out of Adding Mode
        this._addMode = false;

        //Delete the existing content of the table if there is any
        this._clearContent(table);
    },

    dataBind: function (bClearCheckBoxes, bClearSelectedIndex, bClearSorting, bClearFilter) {
        // This table is generated from the server,
        //if we are only using the js without the server side
        //support this table must exists in the page,
        //and its id has to be specifed in the 
        //$create statement of Ajax Framework component creation.
        var table = this.get_element();
        var controlId = this.get_id();

        // Keep the scroll positions of the container. The scroll positions sometimes reset for an unknown reason when the ajax is called from another function instead of the event handler function directly.
        var scrollLeft = this._tableContainer.scrollLeft;
        var scrollTop = this._tableContainer.scrollTop;

        // Clear the grid first
        this.clearGrid(bClearCheckBoxes, bClearSelectedIndex, bClearSorting, bClearFilter);

        var dataSource = this.get_dataSource();

        var columns = this.get_columns();
        var column;
        var i = 0;

        if (((columns == null) || (columns.length == 0)) && (dataSource != null) && (dataSource.length > 0)) {
            //Columns collection has not been specified, so we have to
            //discover it from the datasource, this is same as GridView AutoGenerateColumn = True
            columns = new Array();
            dataRow = dataSource[0];

            for (var property in dataRow) {
                if (!property.startsWith('__')) // Excluding the Ajax Framework Properties
                {
                    column = new Ajax.Controls.GridColumn();

                    column.headerText = column.dataField = property;

                    columns.push(column);
                }
            }
        }

        // IE 6.0 occasionally crashes if the header is not recreated everytime the table refreshes.
        // That's why the header creation code is here.
        //We will render the table as Per W3C so it will contain <thead><tbody> etc
        var thead = document.createElement('thead');
        table.appendChild(thead);

        this._headerRow = document.createElement('tr');
        thead.appendChild(this._headerRow);
        //Apply the header css in the thead row if specified
        var strClass = "";
        if ((this.get_headerCssClass() != null) && (this.get_headerCssClass().length > 0)) {
            strClass = this.get_headerCssClass();
        }

        // Apply fixedHeader class to the header row if the option is chosen.
        // This will fix the header row during the scroll.
        if (this.get_fixedHeader()) {
            if (strClass.length > 0)
                strClass += " fixedHeader";
            else
                strClass = "fixedHeader";
        }

        if (strClass.length > 0)
            this._headerRow.className = strClass;

        var th;
        var dragHandler;
        var sortCallback;
        var sortColumn = this.get_sortColumn();
        var sortOrder;
        var a;

        //Check if AddCheckBoxes is true, if true we have to add an extra column in the begining 
        if (this.get_addCheckBoxes()) {
            th = document.createElement('th');
            this._headerRow.appendChild(th);
            // Check if AddCheckAllHeader is true, if true we have to add a checkbox for check and uncheck all
            if (this.get_addCheckAllHeader()) {
                var checkBox = document.createElement('input');
                checkBox.type = "checkbox";
                th.appendChild(checkBox);

                // Restore the state of the checkbox
                checkBox.checked = this._checkedAll;

                //Create a callback that handles the checkbox click
                var checkboxCallback = Function.createDelegate(this, this._raiseCheckAllClicked);

                //Attach it to the checkbox
                $addHandler(checkBox, 'click', checkboxCallback);

                this._links.push(checkBox);
                this._linkHandlers.push(checkboxCallback);
                this._checkAllCheckBox = checkBox;
            }
            else
                th.innerText = " "; // Just a blank
            th.appendChild(document.createTextNode(this._checkBoxHeaderText));
        }

        for (i = 0; i < columns.length; i++) {
            column = columns[i];
            if (!column.visible)
                continue;

            th = document.createElement('th');

            if (column.allowDragAndDrop) {
                //Need to hook the mousedown event for drag n drop
                dragHandler = Function.createDelegate(this, this._onHeaderMouseDown);
                $addHandler(th, 'mousedown', dragHandler);

                this._headers.push(th);
                this._dragHandlers.push(dragHandler);
            }

            this._headerRow.appendChild(th);
            column.$header = th; //Need to store the header in the column, so that we can calculate the index in later

            //Column allows sorting then it will be rendered a link instead of text
            if (column.sortable) {
                a = document.createElement('a');
                a.appendChild(document.createTextNode(column.headerText));
                a.href = 'javascript:void(0)';
                th.appendChild(a);

                if (sortColumn == column.sortField) {
                    var sortImage = '';

                    //If sortColumn is same we have to toggle the direction,
                    //Need to sort the Sort Image as per the sort direction
                    if (this.get_sortOrder() == Ajax.Controls.GridSortOrder.Ascending) {
                        sortOrder = Ajax.Controls.GridSortOrder.Descending;
                        sortImage = this.get_sortOrderAscendingImage();
                    }
                    else {
                        sortOrder = Ajax.Controls.GridSortOrder.Ascending;
                        sortImage = this.get_sortOrderDescendingImage();
                    }

                    if ((sortImage != null) && (sortImage.length > 0)) {
                        var img = document.createElement('img');

                        img.src = sortImage;
                        img.alt = '';
                        th.appendChild(img);
                    }
                }
                else {
                    //Sort column is not same so the default direction is ascending
                    sortOrder = Ajax.Controls.GridSortOrder.Ascending;
                }

                //Create a callback so that we can pass the sortColumn name and direction
                sortCallback = Function.createCallback(this._raiseSort, { sender: this, sortColumn: column.sortField, sortOrder: sortOrder });

                $addHandler(a, 'click', sortCallback);

                this._links.push(a);
                this._linkHandlers.push(sortCallback);
            }
            else {
                //Column is not sortable so render as text
                th.appendChild(document.createTextNode(column.headerText));
            }

            // If the column is filterable, add a filter link
            if (column.filter) {
                if ((column.filterIcon == Ajax.Controls.FilterIconType.DropDown)
                    || (column.filterIcon == Ajax.Controls.FilterIconType.Default && (column.filter == Ajax.Controls.GridFilterType.AutoFilterOnly || column.useCheckbox))) // Default for AutoFilterOnly and Checkbox is DropDown
                    Sys.UI.DomElement.addCssClass(th, "dropDown");
                else if (column.filterIcon == Ajax.Controls.FilterIconType.Custom) {
                    var className = controlId + "_customFilterIcon";
                    Sys.UI.DomElement.addCssClass(th, className);
                    if (!this._customFilterStyleAdded) {
                        var style = document.createElement("style");
                        document.getElementsByTagName('head')[0].appendChild(style);
                        this._customFilterStyleAdded = true;
                        var styleSheet = style.styleSheet;
                        var selectorTemplate = ".ajax_grid thead tr th." + className + " a.filterButton";
                        var selector = selectorTemplate;
                        var styleArray = ["background: url(" + this.get_filterIconCustomImage() + ")", "0", "0 no-repeat;"];
                        styleSheet.addRule(selector, styleArray.join(" "));
                        selector += ":hover";
                        styleArray[1] = "-16px"; // horizontal position
                        styleSheet.addRule(selector, styleArray.join(" "));
                        selector = selectorTemplate.replace(" th." + className, " th.activeFilter." + className);
                        styleArray[1] = "-32px";
                        styleSheet.addRule(selector, styleArray.join(" "));
                        selector += ":hover";
                        styleArray[1] = "-48px";
                        styleSheet.addRule(selector, styleArray.join(" "));
                    }
                }

                // Filter button place holder
                // Since the filter button will be have "absolute position",
                // some kind of place holder is needed to secure the space when the column width is squeezed.
                var span = document.createElement('span');
                th.appendChild(span);
                span.className = "placeHolder";

                a = document.createElement('a');
                a.href = 'javascript:void(0)';
                th.appendChild(a);
                a.className = "filterButton";
                a.title = "Filter";

                //Create a callback so that we can pass the filterColumn and filterField
                var callback = Function.createCallback(this._raiseFilterButtonClicked, { sender: this, filterColumn: column.dataField, filterField: column.filterField });

                $addHandler(a, 'click', callback);

                this._links.push(a);
                this._linkHandlers.push(callback);

                // Update the filter button status
                // If the filter is active
                if (this._filter[column.filterField] !== undefined)
                    Sys.UI.DomElement.addCssClass(th, "activeFilter");
            }

            //Apply different styles which is mentioned in the column
            if ((column.headerHorizontalAlign != null) && (column.headerHorizontalAlign.length > 0)) {
                th.style.textAlign = column.headerHorizontalAlign;
            }

            if ((column.headerVerticalAlign != null) && (column.headerVerticalAlign.length > 0)) {
                th.style.verticalAlign = column.headerVerticalAlign;
            }

            if ((column.width != null) && (column.width.length > 0)) {
                th.style.width = column.width;
            }

            if (column.nowrap) {
                th.style.whiteSpace = 'nowrap';
            }
        }

        //Shows the Empty Text if DataSource contains nothing 
        if ((dataSource == null) || (dataSource.length == 0)) {
            if ((this.get_emptyDataText() != null) && (this.get_emptyDataText().length > 0)) {
                this._tbody = document.createElement('tbody');

                table.appendChild(this._tbody);

                var tr = document.createElement('tr');
                this._tbody.appendChild(tr);

                var td = document.createElement('td');
                tr.appendChild(td);
                if ((columns != null) && (columns.length > 0))
                    td.colSpan = this.get_visibleColumnsLength();
                td.style.textAlign = 'left';

                td.innerHTML = this.get_emptyDataText();
            }
            //No need to proceed furhter as the datasource is empty
            return;
        }

        //Now Check the DataKey Name existence in dataSource
        var dataKeyName = this.get_dataKeyName();
        var hasDataKeyName = false;
        var dataRow;

        if ((dataKeyName != null) && (dataKeyName.length > 0)) {
            hasDataKeyName = true;

            dataRow = dataSource[0];
            var exists = true;
            var keys = dataKeyName.split(",");
            for (i = 0; i < keys.length; i++) {
                if (dataRow[keys[i]] === undefined) {
                    exists = false;
                    break;
                }
            }

            if (!exists) {
                //DataKeyName does not exist, so raise exception
                throw Error.invalidOperation('Specified dataKeyName does not exists in dataSource.');
            }
        }

        //Header is rendered, now dump the data from the datasource
        var tBody = document.createElement('tbody');
        this._tbody = tBody;

        //Add the dblclick handler to tbody
        //Create a callback
        this._tbodyDblClickHandler = Function.createDelegate(this, this._raiseTbodyDblClicked);
        //Attach it to the tbody
        $addHandler(tBody, 'dblclick', this._tbodyDblClickHandler);

        if (this.get_selectByClick()) {
            //Add the onlick and contextmenu handlers to tbody, so the rows can be selected by the mouse click

            //Create a callback so that we can pass the commandArgument
            var selectCallback = Function.createCallback(this._raiseSelectedIndexChange, { sender: this, value: null, index: null });

            //Attach onlick event to the tbody
            $addHandler(tBody, 'click', selectCallback);
            this._links.push(tBody);
            this._linkHandlers.push(selectCallback);

            //Attach contextmenu event to the tbody
            $addHandler(tBody, 'contextmenu', selectCallback);
            this._tbodyRightClickHandler = selectCallback;
        }

        if (this.get_addCheckBoxes()) {
            //Add the onlick handler to tbody, so the checkboxes can be selected by the mouse click

            //Create a callback that handles checkbox click
            var checkboxCallback = Function.createDelegate(this, this._raiseCheckClicked);

            //Attach it to the tbody
            $addHandler(tBody, 'click', checkboxCallback);

            this._links.push(tBody);
            this._linkHandlers.push(checkboxCallback);
        }

        for (i = 0; i < columns.length; i++) {
            column = columns[i];
            // If a data checkbox is used,
            if (column.useCheckbox && column.visible) {
                //Create a callback that handles the data checkbox click
                var checkboxCallback = Function.createDelegate(this, this._raiseDataCheckClicked);

                //Attach it to the tbody
                $addHandler(tBody, 'click', checkboxCallback);

                this._links.push(tBody);
                this._linkHandlers.push(checkboxCallback);
                break;
            }
        }

        table.appendChild(tBody);

        var tr;
        var td;

        var isAlt = false;
        var className;
        var commandArgument = null;

        var selectedValue = this._selectedValue;
        this._selectedIndex = -1;

        for (i = 0; i < dataSource.length; i++) {
            dataRow = dataSource[i];

            //Since DataKeyName is specified we have to pass it in select event as commandArgument
            if (hasDataKeyName) {
                commandArgument = this._getDataKey(dataRow);
            }

            //Figuring out the proper class 
            className = isAlt ? this.get_alternatingRowCssClass() : this.get_rowCssClass();
            isAlt = !isAlt;

            tr = document.createElement('tr');
            // The following context data will be used with the row's onclick events
            tr.setAttribute("datakey", commandArgument);
            tr.setAttribute("index", i);

            tBody.appendChild(tr);
            this._tableRows.push(tr);

            if ((className != null) && (className.length > 0)) {
                tr.className = className;
            }

            // Restore the selected status if this row is the selected one
            if ((selectedValue != null) && commandArgument == selectedValue) {
                this.select(i);
                selectedValue = null; // Put a stop since the selected row is found
            }

            // Instead of adding onclick events to each row, I decided to add it to tbody
            // and handle by filtering the events by checking the event target element (event.target = "tr" etc).
            // This way, we save the time and data on adding and removing event handlers to all the rows.

            //            if (this.get_selectByClick())
            //            {
            //                //Add the onlick handler to the row, so it can be selected by the mouse click
            // 
            //                //Create a callback so that we can pass the commandArgument
            //                selectCallback = Function.createCallback(this._raiseSelectedIndexChange, {sender:this, value:commandArgument, index:i});

            //                //Attach it to the row
            //                $addHandler(tr, 'click', selectCallback);

            //                this._links.push(tr);
            //                this._linkHandlers.push(selectCallback);
            //            }

            // Add a check box cell if it's selected as an option
            if (this.get_addCheckBoxes()) {
                td = document.createElement('td');
                td.setAttribute("align", "center");
                tr.appendChild(td);
                var checkBox = document.createElement('input');
                checkBox.type = "checkbox";
                checkBox.className = "selectCheckbox";
                td.appendChild(checkBox);

                // Instead of adding onclick events to each checkbox, I decided to add it to tbody
                // and handle by filtering the events by checking the event target element (event.target = "input" etc).
                // This way, we save the time and data on adding and removing event handlers to all the checkboxes.

                //                // Function.createCallback() is not used to create the callback for checkbox click event here.
                //                // Somehow, IE6.0 crashes if it's used to attach the event handler both here and also for the Select callback above.
                //                // I think this is an MS Ajax 1.0 bug.
                //                // Adding the onclick event using the onclick property and Function() object is faster than using Function.createCallback() anyway since no closure function is used,
                //                // therefore, clean up for circular reference memory leak is not needed.
                //                // I also found that this method is also a lot faster than adding the event using the element's innerHTML property for some reason.
                //                // Jung Oh, 10/19/07
                //                checkBox.onclick = new Function("($find('" 
                //                + controlId + "'))._raiseCheckClicked({target:this}, {sender:$find('" 
                //                + controlId + "'), value:'" + commandArgument + "', index:" + i + "});");

                // Restore the state of the checkbox
                if (this._checkedAll) {
                    // We don't need to check against _checkedValues variable
                    checkBox.checked = true;
                }
                else {
                    if (commandArgument == this._checkedValues[commandArgument])
                        checkBox.checked = true;
                }
            }

            for (var j = 0; j < columns.length; j++) {
                column = columns[j];
                if (!column.visible)
                    continue;

                td = document.createElement('td');
                tr.appendChild(td);

                //Apllying the different style which mentioned in the column
                if ((column.horizontalAlign != null) && (column.horizontalAlign.length > 0)) {
                    td.style.textAlign = column.horizontalAlign;
                }

                if ((column.verticalAlign != null) && (column.verticalAlign.length > 0)) {
                    td.style.verticalAlign = column.verticalAlign;
                }

                if (column.nowrap) {
                    td.style.whiteSpace = 'nowrap';
                }

                //We will only dump the data if datafield is specifed,
                //DataField might be empty if someone wants to put the
                //value in rowBound event. For example a calculated value, lookup value et.
                if ((column.dataField != null) && (column.dataField.length > 0)) {
                    var value = dataRow[column.dataField];

                    if (column.useCheckbox == true) {
                        td.setAttribute("align", "center");
                        var checkBox = document.createElement('input');
                        checkBox.className = "dataCheckbox";
                        checkBox.setAttribute("dataField", column.dataField);
                        checkBox.type = "checkbox";
                        td.appendChild(checkBox);
                        if (true == value)
                            checkBox.checked = true;
                    }
                    else {
                        if (value == null || value === "")
                            td.innerText = " ";
                        else {
                            //Apply the format string if specified, for example a currency, datetime column etc.
                            if ((column.formatString != null) && (column.formatString.length > 0)) {
                                value = value.localeFormat(column.formatString);
                            }

                            td.innerText = value;
                        }
                    }
                }
            }

            //Now raise the rowDataBound event, so that the client of this control
            //has a chance to do some extra work. For example putting the calculated, lookup column value etc.
            this._raiseRowDatabound(tr, dataSource[i]);
        }

        // Restore the scroll positions of the container
        this._tableContainer.scrollLeft = scrollLeft;
        this._tableContainer.scrollTop = scrollTop;
    },

    _cancelCheck: function (e) {
        var checkBox = e.target;
        checkBox.checked = !checkBox.checked;
    },

    // Add a new data object to _dataSource array and new row to the table
    // If the table is in Add Mode, provide the index of row that's in Add Mode
    addRow: function (dataObj, index) {
        // Add the new data object to _unfilteredDataSource in case this is called when the built-in filter is active 
        if (this._unfilteredDataSource != null)
            this._unfilteredDataSource.push(dataObj);

        // If the data source is empty, just add the data object and reload the grid
        if (this._dataSource == null || this._dataSource.length == 0) {
            this._dataSource = new Array(dataObj);
            this.dataBind();
            return;
        }

        // Add the data object to _dataSource array
        this._dataSource.push(dataObj);

        var tr;
        if (index == null) {
            index = this._tableRows.length;
            tr = document.createElement("tr");
            this._tbody.appendChild(tr);
            this._tableRows.push(tr);
        }
        else {
            // The table must be in Add Mode. Just get the row in Add Mode
            tr = this._tableRows[index];
        }

        // Add the index attribute of the row
        tr.setAttribute("index", index);

        // Uncheck Check All checkbox since this new row will not be checked by default
        this._checkedAll = false;
        if (this._checkAllCheckBox)
            this._checkAllCheckBox.checked = false;

        // Use replaceSelectedRow() method to render the row
        this.replaceSelectedRow(dataObj, index);
    },

    // Updates the selected row data with the data object
    // If index is provided, it will be used instead of the selected row
    replaceSelectedRow: function (dataObj, index) {
        if (index == null)
            index = this._selectedIndex;

        // Update the selected row
        var tr = this._tableRows[index];
        if (tr == null)
            return;

        while (tr.firstChild) {
            tr.removeChild(tr.firstChild);
        }

        // Update the datakey attribute of the row in case it's changed
        var dataKeyName = this.get_dataKeyName();
        var oldKey;
        var newKey;
        if (dataKeyName && (dataKeyName.length > 0)) {
            oldKey = this.get_dataKey(index);
            newKey = this._getDataKey(dataObj);
            tr.setAttribute("datakey", newKey);
            // Update the _selectedValue property of the grid with the new datakey in case it's changed
            if (index == this._selectedIndex)
                this.set_selectedValue(newKey);

            // Add a check box cell if it's selected as an option
            if (this.get_addCheckBoxes()) {
                td = document.createElement('td');
                td.setAttribute("align", "center");
                tr.appendChild(td);
                var checkBox = document.createElement('input');
                checkBox.type = "checkbox";
                checkBox.className = "selectCheckbox";
                td.appendChild(checkBox);

                // Restore the state of the checkbox
                if (oldKey == this._checkedValues[oldKey]) {
                    checkBox.checked = true;
                    // Update the _checkedValues property of the grid with the new datakey in case it's changed
                    delete this._checkedValues[oldKey];
                    this._checkedValues[newKey] = newKey;
                    // Update the _checkedDataObjects property with the new data object
                    for (var i = 0; i < this._checkedDataObjects.length; i++) {
                        if (oldKey == this._getDataKey(this._checkedDataObjects[i])) {
                            this._checkedDataObjects[i] = dataObj;
                            break;
                        }
                    }
                }
            }
        }

        var columns = this.get_columns();
        var column;
        var td;
        for (var j = 0; j < columns.length; j++) {
            column = columns[j];
            if (!column.visible)
                continue;

            td = document.createElement('td');
            tr.appendChild(td);

            //Aplying the different style which mentioned in the column
            if ((column.horizontalAlign != null) && (column.horizontalAlign.length > 0)) {
                td.style.textAlign = column.horizontalAlign;
            }

            if ((column.verticalAlign != null) && (column.verticalAlign.length > 0)) {
                td.style.verticalAlign = column.verticalAlign;
            }

            if (column.nowrap) {
                td.style.whiteSpace = 'nowrap';
            }

            //We will only dump the data if datafield is specifed,
            //DataField might be empty if someone wants to put the
            //value in rowBound event. For example a calculated value, lookup value et.
            if ((column.dataField != null) && (column.dataField.length > 0)) {
                var value = dataObj[column.dataField];

                if (column.useCheckbox == true) {
                    td.setAttribute("align", "center");
                    var checkBox = document.createElement('input');
                    checkBox.className = "dataCheckbox";
                    checkBox.setAttribute("dataField", column.dataField);
                    checkBox.type = "checkbox";
                    td.appendChild(checkBox);
                    if (true == value)
                        checkBox.checked = true;
                }
                else {
                    if (value == null || value === "")
                        td.innerText = " ";
                    else {
                        //Apply the format string if specified, for example a currency, datetime column etc.
                        if ((column.formatString != null) && (column.formatString.length > 0)) {
                            value = value.localeFormat(column.formatString);
                        }

                        td.innerText = value;
                    }
                }
            }
        }

        // Now raise the rowDataBound event, so that the client of this control
        // has a chance to do some extra work. For example putting the calculated, lookup column value etc.
        this._raiseRowDatabound(tr, dataObj);

        // Update the data object in the grid control's _dataSource and _selectedDataObject fields
        this.set_dataObject(index, dataObj);
        if (index == this._selectedIndex)
            this.set_selectedDataObject(dataObj);
    },

    // Delete the selected row
    // If index is provided, it will be used instead of the selected row
    deleteSelectedRow: function (index) {
        if (index == null)
            index = this._selectedIndex;

        var tr = this._tableRows[index];
        if (tr == null)
            return -1;

        var selectedValue = this.get_dataKey(index);
        var selectedIndex = index;
        var bSelectSameRow = (selectedIndex == this._selectedIndex); // Try selecting the row again after the deletion only if the row to be deleted is currently selected
        var oldSelectedIndex = !bSelectSameRow ? this._selectedIndex : null;

        //Now clear the exisiting selection
        this.resetSelection();

        //Figure out the class of the selected row 
        var isAlt = (tr.className.search(this.get_alternatingRowCssClass()) > -1);

        // Delete the selected row
        tr.parentNode.removeChild(tr);
        this._tableRows.splice(selectedIndex, 1);

        // Remove the data object from _checkedValues and _checkedDataObjects if the data is checked
        if (this._checkedValues[selectedValue] == selectedValue) {
            // Remove the item
            delete this._checkedValues[selectedValue];

            for (var i = 0; i < this._checkedDataObjects.length; i++) {
                if (selectedValue == this._getDataKey(this._checkedDataObjects[i])) {
                    this._checkedDataObjects.splice(i, 1);
                    break;
                }
            }
        }

        // Remove the data object in the grid control's dataSource property
        this._dataSource.splice(selectedIndex, 1);

        // Remove the data object from _unfilteredDataSource also in case this is called when the built-in filter is active 
        if (this._unfilteredDataSource != null) {
            for (var i = 0; i < this._unfilteredDataSource.length; i++) {
                if (selectedValue == this._getDataKey(this._unfilteredDataSource[i])) {
                    this._unfilteredDataSource.splice(i, 1);
                    break; // Data key should be unique, so exit when found
                }
            }
        }

        if (this.get_dataRows().length > 0) {
            var newSelectedIndex;
            // If the deleted row was not the last row
            if (this.get_dataRows().length > selectedIndex) {
                // Update the row class and index attribute of the subsquent rows
                for (var i = selectedIndex; i < this.get_dataRows().length; i++) {
                    //Figuring out the proper class 
                    var className = isAlt ? this.get_alternatingRowCssClass() : this.get_rowCssClass();
                    isAlt = !isAlt;

                    tr = this._tableRows[i];
                    // Update the index attribute which will be used with the row's onclick events
                    tr.setAttribute("index", i);

                    // Update the class
                    if ((className != null) && (className.length > 0)) {
                        tr.className = className;
                    }
                }

                if (bSelectSameRow)
                    newSelectedIndex = selectedIndex; // Select the row in the current position again
            }
            else {
                if (bSelectSameRow)
                    newSelectedIndex = this.get_dataRows().length - 1; // if the last row was deleted, select last row again
            }

            // If a different row than selected row is deleted
            if (!bSelectSameRow && oldSelectedIndex > -1) {
                newSelectedIndex = oldSelectedIndex;
                if (oldSelectedIndex > selectedIndex) // Decrease the index if the deleted row had a lower index 
                    newSelectedIndex--;
            }

            if (newSelectedIndex != null)
                this._raiseSelectedIndexChange(null, { sender: this, value: this.get_dataKey(newSelectedIndex), index: newSelectedIndex });
        }
        return selectedIndex;
    },

    // Enter edit mode for the selected row
    editSelectedRow: function () {
        // Get the selected row
        var tr = this.get_selectedRow();
        if (tr == null)
            return false;

        // Exit if the row is already in Edit Mode
        if (tr.getAttribute("editMode"))
            return false;

        var index = this._selectedIndex;

        var columns = this.get_columns();
        var column;
        var td;
        var i = this.get_addCheckBoxes() ? 1 : 0;
        var controlId = this.get_id();
        // Use Function() object instead of function expression to avoid circular reference created by closure functions
        var cancelFunc = new Function("($find('"
                + controlId + "'))._cancelEdit(" + index + ");");
        var saveFunc = new Function("($find('"
                + controlId + "'))._saveEdit(" + index + ");");
        var keyDownFunc = new Function("return ($find('"
                + controlId + "'))._keyDownEdit(event, " + index + ");");
        var bEditable = false;
        var bFirstInput = true;

        for (var j = 0; j < columns.length; j++) {
            column = columns[j];
            if (!column.visible)
                continue;

            if (column.editable) {
                bEditable = true;
                td = tr.childNodes[i];

                var input = document.createElement("input");
                var idSuffix = index + "_" + column.dataField;
                input.id = controlId + "_txtEdit" + idSuffix;
                if (column.useCheckbox) {
                    input.type = "checkbox";
                    var checkBox = td.getElementsByTagName("input")[0];
                    td.innerHTML = "";
                    // Add the check box
                    td.appendChild(input);
                    input.checked = checkBox.checked;
                }
                else {
                    var text = td.innerText;
                    var width = (td.clientWidth > 80) ? td.clientWidth : 80;
                    input.style.width = width - 42 + "px";
                    td.innerHTML = "";
                    // Add the input text
                    td.appendChild(input);
                    input.value = text;
                    input.className = "edit";
                    if (column.maxLength > 0)
                        input.maxLength = column.maxLength;
                }

                input.onkeydown = keyDownFunc;
                if (bFirstInput) {
                    input.focus();
                    bFirstInput = false;
                }

                var span;
                if (column.useCalendar) {
                    // Add calendar icon
                    span = document.createElement("span");
                    td.appendChild(span);
                    span.id = controlId + "_btnCalendar" + idSuffix;
                    span.className = "calendarIcon";
                    span.title = "Calendar";
                    span.onclick = new Function("($find('"
                    + controlId + "'))._showCalendar('" + input.id + "', '" + span.id + "');");
                }

                // Add the save and cancel icons
                span = document.createElement("span");
                td.appendChild(span);
                span.className = "saveIcon";
                span.title = "Save";
                span.onclick = saveFunc;
                span = document.createElement("span");
                td.appendChild(span);
                span.className = "cancelIcon";
                span.title = "Cancel";
                span.onclick = cancelFunc;
            }
            i++;
        }

        // If at least one column is editable
        if (bEditable) {
            tr.setAttribute("editMode", true);
            // Reset the selection, so the highlight will be gone for better view of the edit controls
            this.resetSelection();
        }
        return index;
    },

    _showCalendar: function (textboxId, buttonId) {
        var editCalendar = $find("EditCalendar");
        // Get hold of the TextBoxWrapper component that the calendar component contains before disposing the calendar component
        var textBoxWrapper = editCalendar._textbox;
        // Exit if the textbox is already associated with the calendar component
        // Note: It's important to compare the actual elements instead of the IDs since a new textbox with the same ID can be created (ie. Refresh, Cancel and re-edit, etc) 
        if (textBoxWrapper.get_element() == $get(textboxId))
            return;
        // Dispose the calendar component so it can be recreated
        editCalendar.dispose();
        // Dispose the TextBoxWrapper component which won't be used anymore
        textBoxWrapper.dispose();
        // Recreate the calendar component with the new target textbox and button
        editCalendar = $create(AjaxControlToolkit.CalendarBehavior, { "id": "EditCalendar", "button": $get(buttonId) }, null, null, $get(textboxId));
        // Add calendar showing event handler
        editCalendar.add_showing(Function.createDelegate(this, this.showingCalendar));
        // Add calendar shown event handler
        editCalendar.add_shown(Function.createDelegate(this, this.shownCalendar));
    },

    // Event handler for calendar showing event
    // Adjust the calendar position with the scroll bar offset
    showingCalendar: function (sender, e) {
        var scrollPanel = (this.get_element()).offsetParent;

        // Set the scroll bar offset
        sender._popupBehavior.set_y(scrollPanel.scrollTop);
        sender._popupBehavior.set_x(scrollPanel.scrollLeft);
    },

    // Event handler for calendar shown event
    // Make sure the calendar is shown if it's in a scroll div
    shownCalendar: function (sender, e) {
        var calendar = sender._popupDiv; // Use _popupDiv instead of _container to get the correct height and width
        var scrollPanel = (this.get_element()).offsetParent;
        var calendarBounds = Sys.UI.DomElement.getBounds(calendar);
        var scrollBounds = Sys.UI.DomElement.getBounds(scrollPanel);

        // If the calendar is not showing, show it by scrolling
        var calendarRight = calendarBounds.x + calendarBounds.width;
        var scrollRight = scrollBounds.x + scrollPanel.clientWidth; // Use clientWidth for the width - scrollbar
        var offsetX = calendarRight - scrollRight;
        if (offsetX > 0)
            scrollPanel.scrollLeft += offsetX;
        var calendarBottom = calendarBounds.y + calendarBounds.height;
        var scrollBottom = scrollBounds.y + scrollPanel.clientHeight; // Use clientHeight for the height - scrollbar
        var offsetY = calendarBottom - scrollBottom;
        if (offsetY > 0)
            scrollPanel.scrollTop += offsetY;
    },

    _keyDownEdit: function (e, index) {
        var keynum;
        if (window.event) // IE
        {
            keynum = e.keyCode;
        }
        else if (e.which) // Firefox
        {
            keynum = e.which;
        }

        // If it's enter key
        if (keynum == 13) {
            this._saveEdit(index);
            return false; // Cancel event propagation
        }
        else if (keynum == 27) // escape key
        {
            this._cancelEdit(index);
            return false; // Cancel event propagation
        }
    },

    _cancelEdit: function (index) {
        // Wrap in setTimeout() so that the click event will bubble up even if the source target (cancel icon) get's deleted
        var callback = Function.createDelegate(this, function () {
            // Remove "editMode" attribute
            var tr = this._tableRows[index];
            tr.removeAttribute("editMode");
            // Replace the row with the original data
            this.replaceSelectedRow(this._dataSource[index], index);
            // Select the row, so the row will be highlighted for easy viewing and confirmation
            this._raiseSelectedIndexChange(null, { sender: this, value: this.get_dataKey(index), index: index });
        });
        window.setTimeout(callback, 50);
    },

    _saveEdit: function (index) {
        // Copy the data object using _cloneObject() method
        var dataObj = this._cloneObject(this._dataSource[index]);
        // Validate and get the input values
        if (this.convertInputToDataObj(index, dataObj) == false)
            return;

        var handler = this.get_events().getHandler('saveEdit');

        if (handler) {
            var eventArgs = new Ajax.Controls.GridCommandEventArgs('Update', { dataObj: dataObj, index: index });
            var bResult = handler(this, eventArgs);
            if (bResult === false) // Give the handler a last chance to invalidate and cancel the save
                return;
            // Get the editting/adding row
            var tr = this._tableRows[index];
            // Remove "editMode" attribute
            tr.removeAttribute("editMode");
            // If the client wants the control to update the row with the new data, do it
            // If this argument is not set, the client is responsible of updating the row
            if (eventArgs.get_updateGrid()) {
                // Replace the row with the new data
                this.replaceSelectedRow(dataObj, index);
            }
            // Select the row, so the row will be highlighted for easy viewing and confirmation
            this._raiseSelectedIndexChange(null, { sender: this, value: this.get_dataKey(index), index: index });
        }
        else {
            throw Error.create("'saveEdit' handler is not provided");
        }
    },

    // Enter add mode
    addNewRow: function (dataObj) {
        // Exit if the table is already in Adding Mode
        if (this._addMode)
            return false;

        // Set to Adding Mode
        this._addMode = true;

        // Add to the end of the table
        var index = this._tableRows.length;

        // Figure out the class of the last row 
        var isAlt = true;
        if (index > 0)
            isAlt = (this._tableRows[index - 1].className.search(this.get_alternatingRowCssClass()) > -1);

        // Remove the Empty Data Text row if it exists
        if (index == 0 && this._tbody.firstChild)
            this._tbody.removeChild(this._tbody.firstChild);

        var tr = document.createElement('tr');
        this._tbody.appendChild(tr);
        this._tableRows.push(tr);

        //Figure out the proper class of the new row
        isAlt = !isAlt;
        var className = isAlt ? this.get_alternatingRowCssClass() : this.get_rowCssClass();
        // Update the class
        if ((className != null) && (className.length > 0)) {
            tr.className = className;
        }

        var columns = this.get_columns();
        var column;
        var td;
        var controlId = this.get_id();
        // Use Function() object instead of function expression to avoid circular reference created by closure functions
        var cancelFunc = new Function("($find('"
                + controlId + "'))._cancelAdd(" + index + ");");
        var saveFunc = new Function("($find('"
                + controlId + "'))._saveAdd(" + index + ");");
        var keyDownFunc = new Function("return ($find('"
                + controlId + "'))._keyDownAdd(event, " + index + ");");
        var bFirstInput = true;

        if (this.get_addCheckBoxes()) {
            // Add an empty cell
            td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = " ";
        }

        for (var j = 0; j < columns.length; j++) {
            column = columns[j];
            if (!column.visible)
                continue;

            td = document.createElement('td');
            tr.appendChild(td);

            if (column.insertable) {
                var input = document.createElement("input");
                var idSuffix = index + "_" + column.dataField;
                input.id = controlId + "_txtEdit" + idSuffix;

                // If dataObj is provided, use it to pre-fill the input boxes
                var value;
                if (dataObj) {
                    value = dataObj[column.dataField];

                    if (value != null) {
                        //Apply the format string if specified, for example a currency, datetime column etc.
                        if ((column.formatString != null) && (column.formatString.length > 0)) {
                            value = value.localeFormat(column.formatString);
                        }
                    }
                }

                if (column.useCheckbox) {
                    input.type = "checkbox";
                    // Add the check box
                    td.appendChild(input);
                    if (value != null)
                        input.checked = value;
                }
                else {
                    var text = td.innerText;
                    var width = (td.clientWidth > 80) ? td.clientWidth : 80;
                    input.style.width = width - 42 + "px";
                    // Add the input text
                    td.appendChild(input);
                    if (value != null)
                        input.value = value;
                    input.className = "edit";
                    if (column.maxLength > 0)
                        input.maxLength = column.maxLength;
                }

                input.onkeydown = keyDownFunc;
                if (bFirstInput) {
                    input.focus();
                    bFirstInput = false;
                }

                var span;
                if (column.useCalendar) {
                    // Add calendar icon
                    span = document.createElement("span");
                    td.appendChild(span);
                    span.id = controlId + "_btnCalendar" + idSuffix;
                    span.className = "calendarIcon";
                    span.title = "Calendar";
                    span.onclick = new Function("($find('"
                    + controlId + "'))._showCalendar('" + input.id + "', '" + span.id + "');");
                }

                // Add the save and cancel icons
                span = document.createElement("span");
                td.appendChild(span);
                span.className = "saveIcon";
                span.title = "Save";
                span.onclick = saveFunc;
                span = document.createElement("span");
                td.appendChild(span);
                span.className = "cancelIcon";
                span.title = "Cancel";
                span.onclick = cancelFunc;
            }
            else {
                td.innerText = " ";
            }
        }

        return index;
    },

    _keyDownAdd: function (e, index) {
        var keynum;
        if (window.event) // IE
        {
            keynum = e.keyCode;
        }
        else if (e.which) // Firefox
        {
            keynum = e.which;
        }

        // If it's enter key
        if (keynum == 13) {
            this._saveAdd(index);
            return false; // Cancel event propagation
        }
        else if (keynum == 27) // escape key
        {
            this._cancelAdd(index);
            return false; // Cancel event propagation
        }
    },

    _cancelAdd: function (index) {
        // Wrap in setTimeout() so that the click event will bubble up even if the source target (cancel icon) get's deleted
        var callback = Function.createDelegate(this, function () {
            // Remove the row
            var tr = this._tableRows.pop();
            tr.parentNode.removeChild(tr);
            this._addMode = false;
        });
        window.setTimeout(callback, 50);
    },

    _saveAdd: function (index) {
        // Validate and get the input values
        var dataObj = new Object();
        if (this.convertInputToDataObj(index, dataObj) == false)
            return;

        var handler = this.get_events().getHandler('saveAdd');

        if (handler) {
            var eventArgs = new Ajax.Controls.GridCommandEventArgs('Add', { dataObj: dataObj, index: index });

            var bResult = handler(this, eventArgs);
            if (bResult === false) // Give the handler a last chance to invalidate and cancel the save
                return;

            // Get out of Adding Mode
            this._addMode = false;

            // If the client wants the control to update the row with the new data, do it
            // If this argument is not set, the client is responsible of updating the row
            if (eventArgs.get_updateGrid()) {
                // Add the row with the new data
                this.addRow(dataObj, index);
            }
        }
        else {
            throw Error.create("'saveAdd' handler is not provided");
        }
    },

    // Validate the Edit and Add inputs and fill the passed dataObj parameter with the values.
    // Return false if the validation fails.
    convertInputToDataObj: function (index, dataObj) {
        // Get the editting/adding row
        var tr = this._tableRows[index];
        var columns = this.get_columns();
        var bIsValid = true;
        var msgArray = new Array();
        var i = this.get_addCheckBoxes() ? 1 : 0;
        for (var j = 0; j < columns.length; j++) {
            var column = columns[j];
            if (column.visible) {
                var input = tr.childNodes[i++].getElementsByTagName("input")[0];

                if (input) {
                    var newValue = this.validateInput(input, column, msgArray);
                    if (newValue != null)
                        dataObj[column.dataField] = newValue;
                    else
                        bIsValid = false;
                }
            }
        }

        // Exit if any validation failed
        if (bIsValid == false) {
            alert("Validation failed.\n" + msgArray.join("\n") + "\n\nPlease correct and try again.");
            return false;
        }

        return true;
    },

    // Validate and return the correctly formatted input value.
    // Return NULL if validation fails.
    validateInput: function (input, column, msgArray) {
        var newValue;
        if (input.type == "checkbox")
            newValue = input.checked;
        else {
            newValue = input.value;
            newValue = newValue.trim();
        }

        var args = null;
        // If validation function is provided for this column, call the function to validate
        if (column.validationFunction != null && column.validationFunction.length > 0) {
            args = { Value: newValue, IsValid: true, ErrorMessage: "Validation Failed" };
            eval(column.validationFunction + "(input, args);");
            if (args.IsValid == false) {
                Sys.UI.DomElement.addCssClass(input, "invalid");
                msgArray.push(column.headerText + ": " + args.ErrorMessage);
                // Show the invalid message in the tooltip
                input.title = args.ErrorMessage;
                newValue = null;
            }
            else {
                Sys.UI.DomElement.removeCssClass(input, "invalid");
                // Update the edit value with the validated value since the validated value might have been formatted in the validate function
                if (input.type == "checkbox")
                    input.checked = args.Value;
                else
                    input.value = args.Value;
                newValue = args.Value;
            }
        }

        if (args == null || args.IsValid) {
            // Unformat if the value is a formatted value
            if ((column.formatString != null) && (column.formatString.length > 0))
                newValue = this._unFormat(column.formatString, newValue);
        }

        return newValue;
    },

    select: function (index) {
        var e = Function._validateParams(arguments, [{ name: 'index', type: Number}]);
        if (e) throw e;

        //No need to processed further if we dont have any data
        if ((this.get_dataRows() == null) || (this.get_dataRows().length == 0)) {
            return;
        }

        //Ensure the index is valid
        if ((index < 0) || (index > (this._tableRows.length - 1))) {
            throw Error.argumentOutOfRange('index', index, 'Specfied index is out of range.');
        }

        //No need to proceed if the current selected index and new index is same
        if (this._selectedIndex == index) {
            return;
        }

        //Now clear the exisiting selection
        this.resetSelection();

        //Add the selected row class
        if ((this.get_selectedRowCssClass() != null) && (this.get_selectedRowCssClass().length > 0)) {
            Sys.UI.DomElement.addCssClass(this.get_dataRows()[index], this.get_selectedRowCssClass());
        }

        //Store the new index
        this._selectedIndex = index;
        //Store the new key value and dataObject
        this._selectedDataObject = this.get_dataSource()[index];
        this._selectedValue = this._getDataKey(this._selectedDataObject);
        //Since the index has changed raise the property change event
        this.raisePropertyChanged('selectedIndex');
    },

    resetSelection: function () {
        //Ensure that this method is called without any parameter
        if (arguments.length !== 0) throw Error.parameterCount();

        // Exit if there's nothing to reset
        if (this._selectedIndex == -1)
            return;

        //No need to processed further if we dont have any data
        if ((this.get_dataRows() == null) || (this.get_dataRows().length == 0)) {
            return;
        }

        //Now Revert back the datarows styles with the original state
        if ((this.get_selectedRowCssClass() != null) && (this.get_selectedRowCssClass().length > 0)) {
            Sys.UI.DomElement.removeCssClass(this.get_selectedRow(), this.get_selectedRowCssClass())
        }

        //reset the index
        this._selectedIndex = -1;
        //reset the key value and dataObject
        this._selectedValue = null;
        this._selectedDataObject = null;
        //Raise the Property change event
        this.raisePropertyChanged('selectedIndex');
    },

    // Add or remove the checked or unchecked item from the "_checkedValues" array and return the click type.
    checkClicked: function (e, value, index) {
        var eventType = e.checked ? "check" : "uncheck";

        if (this._checkedValues[value] == value) {
            if (e.checked) {
                // This item is already added to the arrays. Just return.
                return eventType;
            }
            else {
                // Remove the item from the array.
                delete this._checkedValues[value];
                for (var i = 0; i < this._checkedDataObjects.length; i++) {
                    if (value == this._getDataKey(this._checkedDataObjects[i])) {
                        this._checkedDataObjects.splice(i, 1);
                        break;
                    }
                }
                // Update _checkedAll variable and Check-All Checkbox
                this._checkedAll = false;
                if (this._checkAllCheckBox)
                    this._checkAllCheckBox.checked = false;
                return eventType;
            }
        }

        // Add the checked item and return
        if (e.checked) {
            this._checkedValues[value] = value;
            this._checkedDataObjects.push(this.get_dataObject(index));
        }

        return eventType;
    },

    // If the grid is being paged so it's only showing a portion of data,
    // masterDataObjects parameter that contains the entire data has to be provided.
    checkAll: function (masterDataObjects) {
        masterDataObjects = masterDataObjects ? masterDataObjects : this._dataSource;
        this.resetCheckedItems();
        var i;
        // Check the checkboxes
        for (i = 0; i < this._tableRows.length; i++) {
            var checkInput = this._tableRows[i].cells[0].firstChild;
            checkInput.checked = true;
        }

        if (masterDataObjects) {
            // Update _checkedValues and _checkedDataObjects member variables
            for (i = 0; i < masterDataObjects.length; i++) {
                var value = this._getDataKey(masterDataObjects[i]);
                this._checkedValues[value] = value;
            }
            this._checkedDataObjects = masterDataObjects.slice();
        }
        this._checkedAll = true;
        if (this._checkAllCheckBox)
            this._checkAllCheckBox.checked = true;
    },

    uncheckAll: function () {
        this.resetCheckedItems();
        // Uncheck the checkboxes
        for (i = 0; i < this._tableRows.length; i++) {
            var checkInput = this._tableRows[i].cells[0].firstChild;
            checkInput.checked = false;
        }
        if (this._checkAllCheckBox)
            this._checkAllCheckBox.checked = false;
    },

    resetCheckedItems: function () {
        //Ensure that this method is called without any parameter
        if (arguments.length !== 0) throw Error.parameterCount();
        this._checkedValues = new Object();
        this._checkedDataObjects = new Array();
        this._checkedAll = false;
    },

    getColumnIndex: function (columnHeaderText) {
        //Argument validation
        var e = Function._validateParams(arguments, [{ name: 'columnHeaderText', type: String}]);
        if (e) throw e;

        //Since we are supporing drag n drop it is not possible
        //that the index of the column will be static,
        //that is why we need a helper function which will
        //resolve the proper index based upon the header text.
        //****Warning: if Same header is used for more than one column
        //it will only return the first

        if (this._headerRow != null) {
            var columns = this.get_columns();

            if ((columns != null) && (columns.length > 0)) {
                var column;

                for (var i = 0; i < columns.length; i++) {
                    column = columns[i];

                    if ((column.headerText == columnHeaderText) && column.visible) {
                        //Header text match.
                        //now check the header index form the header row;
                        for (var j = 0; j < this._headerRow.childNodes.length; j++) {
                            if (this._headerRow.childNodes[j] == column.$header) {
                                return j;
                            }
                        }
                    }
                }
            }
        }

        return -1;
    },

    add_columnDragStart: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('columnDragStart', handler);
    },

    remove_columnDragStart: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('columnDragStart', handler);
    },

    add_columnDropped: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('columnDropped', handler);
    },

    remove_columnDropped: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('columnDropped', handler);
    },

    add_sort: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('sort', handler);
    },

    remove_sort: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('sort', handler);
    },

    add_filterButtonClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('filterButtonClicked', handler);
    },

    remove_filterButtonClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('filterButtonClicked', handler);
    },

    add_filterItemClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('filterItemClicked', handler);
    },

    remove_filterItemClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('filterItemClicked', handler);
    },

    add_saveEdit: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('saveEdit', handler);
    },

    remove_saveEdit: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('saveEdit', handler);
    },

    add_saveAdd: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('saveAdd', handler);
    },

    remove_saveAdd: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('saveAdd', handler);
    },

    add_rowDataBound: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('rowDataBound', handler);
    },

    remove_rowDataBound: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('rowDataBound', handler);
    },

    add_selectedIndexChange: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('selectedIndexChange', handler);
    },

    remove_selectedIndexChange: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('selectedIndexChange', handler);
    },

    add_dataCheckClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('dataCheckClicked', handler);
    },

    remove_dataCheckClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('dataCheckClicked', handler);
    },

    add_checkClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('checkClicked', handler);
    },

    remove_checkClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('checkClicked', handler);
    },

    add_checkAllClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('checkAllClicked', handler);
    },

    remove_checkAllClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('checkAllClicked', handler);
    },

    add_tbodyDblClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().addHandler('tbodyDblClicked', handler);
    },

    remove_tbodyDblClicked: function (handler) {
        var e = Function._validateParams(arguments, [{ name: "handler", type: Function}]);
        if (e) throw e;

        this.get_events().removeHandler('tbodyDblClicked', handler);
    },

    _raiseColumnDragStart: function (column) {
        var handler = this.get_events().getHandler('columnDragStart');

        if (handler) {
            handler(this, new Ajax.Controls.GridColumnDragStartEventArgs(column));
        }
    },

    _raiseColumnDropped: function (column, oldIndex, newIndex) {
        var handler = this.get_events().getHandler('columnDropped');

        if (handler) {
            handler(this, new Ajax.Controls.GridColumnDroppedEventArgs(column, oldIndex, newIndex));
        }
    },

    _raiseSort: function (e, context) {
        context.sender._sortColumn = context.sortColumn;
        context.sender._sortOrder = context.sortOrder;

        var handler = context.sender.get_events().getHandler('sort');

        if (handler) {
            handler(context.sender, new Ajax.Controls.GridSortEventArgs(context.sortColumn, context.sortOrder));
        }
        else {
            // External sort handler is not provided, so run this default algorithm.
            context.sender.showProgress("Sorting...");
            // Wrap in setTimeout() so the update progress indicator will show.
            window.setTimeout(function () {
                if (context.sender._dataSource) {
                    // Sort the data object array
                    // Use prototype.js's bind() function to bind the compare function to the sender object,
                    // so "this" keyword will reference the sender object in the compare function.
                    context.sender._dataSource.sort(context.sender._compare.bind(context.sender));
                }
                // Reload the table preserving selected and/or checked items
                context.sender.dataBind(false, false, false, false);
                context.sender.hideProgress();
            }, 50);
        }
    },

    _raiseFilterButtonClicked: function (e, context) {
        var handler = context.sender.get_events().getHandler('filterButtonClicked');

        // Create/show/hide the filter list
        var filterShowed = context.sender.showHideFilterList(context.filterColumn, context.filterField);
        // If returned false, it means the filter is clicked to hide, so just fire the close event
        if (!filterShowed) {
            if (handler) {
                handler(context.sender, new Ajax.Controls.GridFilterEventArgs(context.filterColumn, context.filterField, null, Ajax.Controls.GridFilterEventType.FilterClose));
            }
        }
        else {
            // Fire open event which will handle the addition of AutoFilter FilterList
            if (handler)
                handler(context.sender, new Ajax.Controls.GridFilterEventArgs(context.filterColumn, context.filterField, null, Ajax.Controls.GridFilterEventType.FilterOpen));
            // External filterButtonClick handler is not provided, so run this default algorithm.
            else
                context.sender.addFilterList(context.filterColumn, false, context.sender._dataSource);
        }
    },

    // Create, show, or hide FilterList.
    // Return true if successfully created or shown
    // Return false if hidden
    showHideFilterList: function (filterColumn, filterField) {
        var filterDiv = this._filterDivs[filterColumn];
        // Hide all the other filters first
        this.hideFilters(null, filterColumn);

        // If the filter list for the column doesn't exist, create one
        if (!filterDiv) {
            var table = this.get_element();
            // Create a div that will contain filter items
            filterDiv = document.createElement("div");
            // Add to the container of the table
            this._tableContainer.appendChild(filterDiv);
            this._filterDivs[filterColumn] = filterDiv;
            filterDiv.id = table.id + "_filterDiv_" + filterColumn;
            filterDiv.className = "filter";
            filterDiv.setAttribute("filterField", filterField);
            filterDiv.setAttribute("filterColumn", filterColumn);
            var eventHandler = Function.createDelegate(this, this.onFilterItemClick);
            $addHandler(filterDiv, 'click', eventHandler);
            this._filterDivClickHandlers[filterColumn] = eventHandler;

            // Add filter textbox or checkboxes and "(All)" filter item
            var column = this.get_column(filterColumn);
            var input = document.createElement("INPUT");
            if (!column.useCheckbox && column.filter != Ajax.Controls.GridFilterType.AutoFilterOnly) {
                // Add a textbox that can be used for the user to enter the text that he wants to filter directly
                input.className = "filterText";
                input.title = "Type filter value and press \"Enter\" key";
                filterDiv.appendChild(input);
                // Attach the onFilterItemClick event handler which is coded to handle the textbox keydown event to the textbox
                var eventHandler = Function.createDelegate(this, this.onFilterItemClick);
                $addHandler(input, 'keydown', eventHandler);
                this._filterTextKeyDownHandlers[filterColumn] = eventHandler;
                filterDiv.filterText = input;
            }

            var filterLinkTemplate = new Array();
            filterLinkTemplate.push("<a class='filterItem' href='javascript:void(0);' value='"); //0
            filterLinkTemplate.push("value"); //1
            filterLinkTemplate.push("'>"); //2
            filterLinkTemplate.push("text"); //3
            filterLinkTemplate.push("</a>"); //4

            // Add "(All)" to the filter list
            a = document.createElement("a");
            filterDiv.appendChild(a);
            filterLinkTemplate[1] = "*";
            filterLinkTemplate[3] = "(All)";
            a.outerHTML = filterLinkTemplate.join("");

            if (column.useCheckbox) {
                // Add a checkbox that can be used as the filter
                input.type = "checkbox";
                input.className = "filterCheckBox";
                var input2 = input.cloneNode(true);
                // Wrap the checkbox in a link
                filterLinkTemplate[1] = true;
                filterLinkTemplate[3] = "";
                a = document.createElement(filterLinkTemplate.join(""));
                a.appendChild(input);
                filterDiv.appendChild(a);
                input.checked = true;

                filterLinkTemplate[1] = false;
                a = document.createElement(filterLinkTemplate.join(""));
                a.appendChild(input2);
                filterDiv.appendChild(a);

                // Add a click handler that will reverse the check action.
                // We want to make the check box read only without disabling it.
                // Disabling it makes it too gray.
                var clickHandler = Function.createDelegate(this, this._cancelCheck);
                $addHandler(input, "click", clickHandler);
                $addHandler(input2, "click", clickHandler);
                this._filterCheckBoxHandlers[filterColumn] = clickHandler;
                filterDiv.filterCheckBoxes = new Array();
                filterDiv.filterCheckBoxes.push(input);
                filterDiv.filterCheckBoxes.push(input2);
            }
        }
        else if (filterDiv.style.display == "block") {
            // The filter list button is clicked to close
            filterDiv.style.display = "none";
            return false;
        }

        // Show and adjust position.
        this.positionFilterList(filterDiv);
        // Set focus on the filter textbox if the filter is not set
        if (this._filter[filterField] === undefined) {
            if (filterDiv.filterText)
                filterDiv.filterText.focus();
        }
        else if (filterDiv.selectedItem == undefined) {
            // The filter is set but the "selectedItem" is empty.
            // The filter list must have been re-created.
            if (filterDiv.filterText) {
                // Fill the filter texbox with the filter value and set it as the "selectedItem".
                filterDiv.filterText.value = this._filter[filterField];
                filterDiv.selectedItem = filterDiv.filterText;
                Sys.UI.DomElement.addCssClass(filterDiv.selectedItem, "selected");
                filterDiv.filterText.focus();
            }
            if (filterDiv.filterCheckBoxes) {
                // Find the checkbox that has the filter value and set it as the "selectedItem"
                for (var i = 0; i < filterDiv.filterCheckBoxes.length; i++) {
                    if (filterDiv.filterCheckBoxes[i].checked == this._filter[filterField]) {
                        filterDiv.selectedItem = filterDiv.filterCheckBoxes[i].parentNode;
                        Sys.UI.DomElement.addCssClass(filterDiv.selectedItem, "selected");
                        break;
                    }
                }
            }
        }

        return true;
    },

    addFilterList: function (filterColumn, bFillAll, dataObjects, bSkipDistinct) {
        var filterDiv = this.get_filterDiv(filterColumn);
        if (filterDiv.filterArray) // AutoFilter is already added, so just exit
            return;

        var column = this.get_column(filterColumn);
        if (column.useCheckbox || column.filter == Ajax.Controls.GridFilterType.TextFilterOnly) // We don't need additional filter items if we are going to filter using a checkbox or AutoFilter is disabled
        {
            filterDiv.filterArray = new Array(); // Set with an empty array, so this if clause will not be reached again
            return;
        }

        // External filterButtonClick handler is not provided, so run this default algorithm.
        // Show the progress message
        this.showProgress("Creating AutoFilter...");

        // Wrap in setTimeout() so the update progress indicator will show.
        window.setTimeout(Function.createDelegate(this, function () {
            // Fill the filter list
            this.fillFilterList(filterDiv, bFillAll, dataObjects, bSkipDistinct);
            this.hideProgress();
        }), 50);
    },

    // Used to initially or additionally fill the AutoFilter FilterList
    fillFilterList: function (filterColumnOrDiv, bFillAll, dataObjects, bSkipDistinct) {
        var filterDiv, filterColumn;
        if (typeof (filterColumnOrDiv) == "object") {
            filterDiv = filterColumnOrDiv;
            filterColumn = filterDiv.getAttribute("filterColumn");
        }
        else {
            filterColumn = filterColumnOrDiv;
            filterDiv = this.get_filterDiv(filterColumn);
        }

        var filterField = filterDiv.getAttribute("filterField");

        var filterArray = filterDiv.filterArray;
        // If dataObjects param is provided (initial fill),
        if (dataObjects) {
            // Create filterArray from dataObjects parameter
            filterArray = this.createFilterArray(filterColumn, filterField, dataObjects, bSkipDistinct);
            filterArray.sort(this._compareFilterItems);
            // Add the filter array as an expando property
            filterDiv.filterArray = filterArray;
        }

        if (!filterArray)
            return; // dataObjects must be just null (no data to filter)

        var filterLinkArray = new Array();
        var maxIndex = filterArray.length;
        if (!bFillAll)
        // Fill maximum 1000 items at a time
            maxIndex = (filterArray.length > 1000) ? 1000 : filterArray.length;

        // If there are more filter items to add in the future,
        if ((filterArray.length - maxIndex) > 0) {
            // Unless this is an empty filter list (first fill), add or reposition "Load All" link to the filter list
            if (filterDiv.childNodes.length > 2) {
                // If exists already, reposition the link so it will be visible after the load
                if (filterDiv.loadAllLink) {
                    filterDiv.removeChild(filterDiv.loadAllLink);
                    filterDiv.appendChild(filterDiv.loadAllLink);
                }
                // or create one from scratch
                else {
                    var a = document.createElement("a");
                    filterDiv.appendChild(a);
                    a.className = "loadAll";
                    a.innerText = "Load All";
                    a.href = "javascript:void(0);"
                    var eventHandler = Function.createDelegate(this, this.filterListLoadAll);
                    $addHandler(a, 'click', eventHandler);
                    this._filterListLoadAllHandlers[filterColumn] = eventHandler;
                    filterDiv.loadAllLink = a;
                }
            }
        }
        // Since there are no more filter items to add, remove the scroll event handler from the filter list
        else {
            if (this._filterDivScrollHandlers[filterColumn]) {
                $removeHandler(filterDiv, 'scroll', this._filterDivScrollHandlers[filterColumn]);
                delete this._filterDivScrollHandlers[filterColumn];
            }

            // If "Load All" link exists, remove the click handler from the "Load All" link then remove the link
            if (filterDiv.loadAllLink) {
                if (this._filterListLoadAllHandlers[filterColumn]) {
                    $removeHandler(filterDiv.loadAllLink, 'click', this._filterListLoadAllHandlers[filterColumn]);
                    delete this._filterListLoadAllHandlers[filterColumn];
                }
                filterDiv.removeChild(filterDiv.loadAllLink);
                filterDiv.loadAllLink = null;
            }
        }

        var column = this.get_column(filterColumn);
        var formatString = column.formatString;
        var i, a;

        // If there's a format string, show the actual filter value in the tooltip
        if (formatString != null && formatString.length > 0) {
            var filterLinkTemplate2 = new Array();
            filterLinkTemplate2.push("<a class='filterItem' href='javascript:void(0);' title='"); //0
            filterLinkTemplate2.push("title"); //1
            filterLinkTemplate2.push("' value='"); //2
            filterLinkTemplate2.push("value"); //3
            filterLinkTemplate2.push("'>"); //4
            filterLinkTemplate2.push("text"); //5
            filterLinkTemplate2.push("</a>"); //6
            // Fill the filter list with next "maxIndex" items
            for (i = 0; i < maxIndex; i++) {
                a = document.createElement("a");
                filterDiv.appendChild(a);
                var value = filterArray[i].value;
                filterLinkTemplate2[1] = value;
                filterLinkTemplate2[3] = value;
                filterLinkTemplate2[5] = filterArray[i].text.localeFormat ? filterArray[i].text.localeFormat(formatString) : filterArray[i].text;
                a.outerHTML = filterLinkTemplate2.join("");
            }
        }
        else {
            var filterLinkTemplate = new Array();
            filterLinkTemplate.push("<a class='filterItem' href='javascript:void(0);' value='"); //0
            filterLinkTemplate.push("value"); //1
            filterLinkTemplate.push("'>"); //2
            filterLinkTemplate.push("text"); //3
            filterLinkTemplate.push("</a>"); //4
            // Fill the filter list with next "maxIndex" items
            for (i = 0; i < maxIndex; i++) {
                a = document.createElement("a");
                filterDiv.appendChild(a);
                filterLinkTemplate[1] = filterArray[i].value;
                filterLinkTemplate[3] = filterArray[i].text;
                a.outerHTML = filterLinkTemplate.join("");
            }
        }
        // Remove the ones that are added from the filter array
        filterArray.splice(0, maxIndex);

        // If this is an initial fill and there are more filter items to fill, add the scroll event handler
        if (!this._filterDivScrollHandlers[filterColumn] && filterDiv.filterArray.length > 0) {
            eventHandler = Function.createDelegate(this, this.filterListScrollEvent);
            $addHandler(filterDiv, 'scroll', eventHandler);
            this._filterDivScrollHandlers[filterColumn] = eventHandler;
        }
        // Adjust position again since the width of the filter list might have changed
        this.positionFilterList(filterDiv);
    },

    positionFilterList: function (filterDiv) {
        var filterColumn = filterDiv.getAttribute("filterColumn");
        var th = this.getHeaderCell(filterColumn);
        var header = this._headerRow;
        filterDiv.style.display = "block"; // Show first so the height and left can be calculated correctly
        filterDiv.style.top = header.offsetHeight + this._tableContainer.scrollTop + "px";
        filterDiv.style.margin = "0px";
        var lineheight = filterDiv.childNodes[0].offsetHeight;
        filterDiv.style.height = lineheight * ((filterDiv.childNodes.length > 5) ? 5 : filterDiv.childNodes.length) + "px";
        // if there's a vertical sroll bar, add the scroll bar width to the filter list container's width
        if (filterDiv.scrollHeight > filterDiv.clientHeight)
            filterDiv.style.width = th.clientWidth + 22 + "px";
        else
            filterDiv.style.width = th.clientWidth + "px";
        // (filterDiv.offsetWidth - th.offsetWidth) is the offset that has to be subtracted in case the filter's width is longer than the column's width
        var leftOffset = filterDiv.offsetWidth - th.offsetWidth;
        var left = th.offsetLeft + th.clientLeft;
        // Subtract the offset only if there's a room on the left
        if ((left - leftOffset) >= 0)
            left -= leftOffset;
        filterDiv.style.left = left + "px";

        var filterWidth = (filterDiv.clientWidth - 7) + "px";
        // Set the width of the filter textbox
        if (filterDiv.filterText)
            filterDiv.filterText.style.width = filterWidth;
    },

    tableContainerScrollEvent: function () {
        // Adjust the top position of any displaying filter list
        for (var prop in this._filterDivs) {
            var filterDiv = this._filterDivs[prop];
            if (filterDiv.style.display != "none")
                filterDiv.style.top = this._headerRow.offsetHeight + this._tableContainer.scrollTop + "px";
        }
    },

    filterListScrollEvent: function (e, bFillAll) {
        var filterDiv = e.target;
        var scrollBottom = filterDiv.scrollHeight - filterDiv.scrollTop - filterDiv.clientHeight;
        if (scrollBottom == 0 || bFillAll) {
            // Skip if it's currently filling the filter list
            // This is to avoid the phantom scroll event fired right after the fill
            if (filterDiv.fillingNow == true)
                return;
            else
                filterDiv.fillingNow = true;

            // Fill the filter list
            this.showProgress("Loading...", filterDiv);
            // Wrap in setTimeout() so the update progress indicator will show.
            var callback = Function.createDelegate(this, function () {
                var scrollTop = filterDiv.scrollTop;
                var loadAllLink = filterDiv.loadAllLink;
                this.fillFilterList(filterDiv, bFillAll);
                // If "Load All" link is added for the first time, adjust the scroll so the link will show
                if (!loadAllLink && filterDiv.loadAllLink)
                    scrollTop += filterDiv.loadAllLink.offsetHeight;

                // Wrap in setTimeout() to set scrollTop property will
                // fix the IE glitch that the scroll position staying at the bottom even after the fill.
                window.setTimeout(function () {
                    filterDiv.scrollTop = scrollTop;
                    filterDiv.fillingNow = false;
                }, 50);
                this.hideProgress();
            });
            window.setTimeout(callback, 50);
        }
    },

    // "Load All" link click handler. Load all items in the filter array
    filterListLoadAll: function (e) {
        // Tweek the event object and delegate to filterListScrollEvent() method
        e.target = e.target.parentNode;
        this.filterListScrollEvent(e, true);
    },

    hideFilters: function (e, exceptColumn) {
        // If this click event is generated from a filter button, just exit
        // The filter button handler will handle this case
        // Also, ignore this event if this is a click event from the "Load All" link in the filter list or custom filter textbox or checkbox.
        if (e && e.type == "click" && (e.target.className == "filterButton" || e.target.className == "loadAll" || e.target.className.search(/filterText/) > -1)) {
            return;
        }

        for (var prop in this._filterDivs) {
            if (prop != exceptColumn)
                this._filterDivs[prop].style.display = "none";
        }
    },

    onFilterItemClick: function (e) {
        var filterItem = this.getFilterItem(e);
        // This is from an event we are not interested in (including non-Enter-key keydown events).
        // So don't return false to cancel the event. Just return.
        if (filterItem == null)
            return;

        var filterDiv = filterItem.parentNode;
        var filterColumn = filterDiv.getAttribute("filterColumn");
        var filterField = filterDiv.getAttribute("filterField");
        var filterValue = filterItem.getAttribute("value");
        if (filterItem.tagName == "INPUT" && filterItem.type == "text") // If the clicked filter item is an input box
        {
            var msgArray = new Array();
            filterValue = this.validateInput(filterItem, this.get_column(filterColumn), msgArray);
            if (filterValue == null) {
                alert("Validation failed.\n" + msgArray[0] + "\n\nPlease correct and try again.");
                return false;
            }
        }
        var filterText = filterItem.innerText;
        // If (All) is clicked,
        if (filterValue == "*" && filterText == "(All)") {
            // If the filter exists
            if (this._filter[filterField] !== undefined) {
                delete this._filter[filterField]; // Remove the filter
                // Update the filter button status
                var th = this.getHeaderCell(filterColumn);
                Sys.UI.DomElement.removeCssClass(th, "activeFilter");
                // Clear all filter lists so they can be recreated
                this._clearFilterLists();
            }
            else {
                // The filter doesn't exist already. Just exit.
                return false;
            }
        }
        else {
            if (this.get_column(filterColumn).useCheckbox)
                filterValue = (filterValue == "true"); // convert to boolean

            // If the selected item or filter textbox value is changed
            if (filterDiv.selectedItem != filterItem || this._filter[filterField] !== filterValue) {
                this._filter[filterField] = filterValue; // Add/update the filter
                if (filterDiv.selectedItem)
                    Sys.UI.DomElement.removeCssClass(filterDiv.selectedItem, "selected");
                filterDiv.selectedItem = filterItem;
                Sys.UI.DomElement.addCssClass(filterDiv.selectedItem, "selected");
                // Update the filter button status
                var th = this.getHeaderCell(filterColumn);
                Sys.UI.DomElement.addCssClass(th, "activeFilter");
                // Clear all the other filter lists so they can be recreated
                this._clearFilterLists(filterColumn);
            }
            else {
                // The filter value didn't change. Just update filterDiv.selectedItem expando property and exit.
                filterDiv.selectedItem = filterItem;
                Sys.UI.DomElement.addCssClass(filterDiv.selectedItem, "selected");
                return false;
            }
        }

        // Clear all the checks.  
        // We don't want to track checked items when filter status changes.
        this.resetCheckedItems();

        var handler = this.get_events().getHandler('filterItemClicked');

        if (handler) {
            handler(this, new Ajax.Controls.GridFilterEventArgs(null, filterField, filterValue, Ajax.Controls.GridFilterEventType.FilterApply));
        }
        else {
            // External filterItemClick handler is not provided, so run this default algorithm.
            this.showProgress("Filtering...");
            // Wrap in setTimeout() so the update progress indicator will show.
            var callback = Function.createDelegate(this, function () {
                // Apply the filter
                this._applyFilter();
                this.hideProgress();
            });
            window.setTimeout(callback, 50);
        }
        return false; // Return false to cancel form enter key event
    },

    _applyFilter: function () {
        if (this._unfilteredDataSource == null)
            this._unfilteredDataSource = this._dataSource;

        this._dataSource = this.filterDataObjects(this._unfilteredDataSource);
        // Sort the data if _sortColumn is set
        if (this._dataSource && this._sortColumn != "")
            this._dataSource.sort(Function.createDelegate(this, this._compare));
        this.dataBind(false, false, false, false);
    },

    filterDataObjects: function (dataObjects) {
        // Use the prototype Array.filter() function to filter the data
        return dataObjects ? dataObjects.filter(Function.createDelegate(this, this.filterFunction)) : dataObjects;
    },

    filterFunction: function (item, index, array) {
        for (var filterField in this._filter) {
            if (item[filterField] != this._filter[filterField])
                return false;
        }
        return true;
    },

    // Get the menu item from the event
    getFilterItem: function (e) {
        var firingobj = this._ie5 ? event.srcElement : e.target;

        if (e.type == "keydown") {
            var keyCode;
            if (Sys.Browser.agent == Sys.Browser.Firefox) // Firefox
            {
                keyCode = e.which;
            }
            else {
                keyCode = e.keyCode;
            }

            // If not Enter key press, exit
            if (keyCode != "13")
                return null;
            // Enter key pressed. Hide the filter and continue
            else
                this.hideFilters(e);
        }
        else if (e.type == "click") {
            // Exit if clicked in the filter textbox
            if (firingobj.className.search(/filterText/) > -1)
                return null;
        }
        else
            return null;

        if (firingobj.className.search(/filterItem|filterText|filterCheckBox/) > -1) {
            if (firingobj.className.search(/filterCheckBox/) > -1)
                return firingobj.parentNode; // Return the filterItem that wraps the checkbox
            else
                return firingobj;
        }
        else if (this._ns6 && firingobj.parentNode.className.search(/filterItem|filterText|filterCheckBox/) > -1)
            if (firingobj.parentNode.className.search(/filterCheckBox/) > -1)
                return firingobj.parentNode.parentNode; // Return the filterItem that wraps the checkbox
            else
                return firingobj.parentNode;
        else
            return null;
    },

    getHeaderCell: function (dataField) {
        var columns = this.get_columns();
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].dataField == dataField)
                return columns[i].$header;
        }
        return null;
    },

    _compareFilterItems: function (item1, item2) {
        if (item1.text == item2.text)
            return 0;

        return (item1.text < item2.text) ? -1 : 1;
    },

    createFilterArray: function (filterColumn, filterField, masterDataObjects, bSkipDistinct) {
        bSkipDistinct = bSkipDistinct ? bSkipDistinct : false;
        masterDataObjects = masterDataObjects ? masterDataObjects : this._dataSource;

        var filterArray = new Array();
        var filterDict = new Object();

        if (masterDataObjects == null)
            return filterArray;

        for (var i = 0; i < masterDataObjects.length; i++) {
            var filterColumnVal = masterDataObjects[i][filterColumn];
            var filterFieldVal = masterDataObjects[i][filterField];
            if (filterColumnVal != null && filterFieldVal != null) {
                // If this is a new column value, add to the list
                if (bSkipDistinct || filterDict[filterColumnVal] == null) {
                    if (!bSkipDistinct)
                        filterDict[filterColumnVal] = filterColumnVal;
                    var filterItem = { text: filterColumnVal, value: filterFieldVal };
                    filterArray.push(filterItem);
                }
            }
        }
        return filterArray;
    },

    _raiseRowDatabound: function (tableRow, dataItem) {
        var handler = this.get_events().getHandler('rowDataBound');

        if (handler) {
            handler(this, new Ajax.Controls.GridRowDataBoundEventArgs(tableRow, dataItem));
        }
    },

    _raiseSelectedIndexChange: function (e, context) {
        // Exit if this click is raised from an input tag (ie. checkbox)
        if (e != null && e.target.tagName == "INPUT")
            return;

        var value;
        var index;
        // If the context data is null, the event must have fired from the onclick event associated with tbody
        // Then, get the context data from the attributes of the tr element
        if (context.index == null) {
            if (e.target.tagName == "TR" || e.target.tagName == "TD") {
                var tr = (e.target.tagName == "TR") ? e.target : e.target.parentNode;
                value = tr.getAttribute("datakey");
                index = parseInt(tr.getAttribute("index"), 10);
            }
            else
                return;
        }
        else {
            value = context.value;
            index = context.index;
        }

        if (index == null || isNaN(index))
            return;

        context.sender.select(index);

        var handler = context.sender.get_events().getHandler('selectedIndexChange');

        if (handler) {
            handler(context.sender, new Ajax.Controls.GridCommandEventArgs('Select', value));
        }
    },

    _raiseCheckClicked: function (e) {
        // Exit if this click is not raised from the select checkbox
        if ((e.target.className != "selectCheckbox") || (e.target.tagName != "INPUT") || (e.target.type != "checkbox"))
            return;

        // Get the context data from the tr element that contains the checkbox
        var tr = e.target.parentNode.parentNode;
        var value = tr.getAttribute("datakey");
        var index = parseInt(tr.getAttribute("index"), 10);

        var eventType = this.checkClicked(e.target, value, index);

        var handler = this.get_events().getHandler('checkClicked');

        if (handler) {
            var cancel = false;
            var eventArgs = new Ajax.Controls.GridCheckEventArgs(eventType, value, index, cancel);
            handler(this, eventArgs);
            // If cancel is true, undo the check
            if (eventArgs.get_cancel()) {
                e.target.checked = false;
                this.checkClicked(e.target, value, index);
            }
        }
    },

    _raiseDataCheckClicked: function (e) {
        var checkBox = e.target;
        // Exit if this click is not raised from the data checkbox
        if ((checkBox.className != "dataCheckbox") || (checkBox.tagName != "INPUT") || (checkBox.type != "checkbox"))
            return;

        // Get the context data from the tr element that contains the checkbox
        var tr = checkBox.parentNode.parentNode;
        var value = tr.getAttribute("datakey");
        var index = parseInt(tr.getAttribute("index"), 10);

        var eventType = checkBox.checked ? "check" : "uncheck";

        // Restore the check.  We want to make the check box read only without disabling it.
        // Disabling it makes it too gray.
        checkBox.checked = !checkBox.checked;

        var handler = this.get_events().getHandler('dataCheckClicked');

        if (handler) {
            var cancel = false;
            var eventArgs = new Ajax.Controls.GridCheckEventArgs(eventType, value, index, cancel, checkBox, checkBox.getAttribute("dataField"));
            handler(this, eventArgs);
            // If cancel is true, undo the check
            if (eventArgs.get_cancel()) {
                checkBox.checked = false;
            }
        }
    },

    _raiseCheckAllClicked: function (e) {
        // Exit if this click is not raised from an input tag (ie. checkbox)
        if ((e.target.tagName != "INPUT") || (e.target.type != "checkbox"))
            return;

        var eventType = e.target.checked ? "check" : "uncheck";

        var handler = this.get_events().getHandler('checkAllClicked');

        // If a handler is provided, just call the handler
        if (handler) {
            var cancel = false;
            var eventArgs = new Ajax.Controls.GridCheckEventArgs(eventType, null, null, cancel);
            handler(this, eventArgs);
            // If cancel is true, undo the check
            if (eventArgs.get_cancel()) {
                e.target.checked = false;
            }
        }
        // If a handler is not provided, handle it internally using checkAll() method
        else {
            if (e.target.checked)
                this.checkAll();
            else
                this.uncheckAll();
        }
    },

    _raiseTbodyDblClicked: function (e) {
        var handler = this.get_events().getHandler('tbodyDblClicked');

        if (handler) {
            if (e.target.tagName == "TR" || e.target.tagName == "TD") {
                var table = (e.target.tagName == "TR") ? e.target.parentNode.parentNode : e.target.parentNode.parentNode.parentNode;
                // Call the event handler only if the event is raised from the TR and TD of the table element
                if (table.id == this.get_id())
                    handler(this);
            }
        }
    },

    _onTableKeyDown: function (e) {
        // Exit if this click is raised from an input tag (ie. edit textbox)
        if (e.target.tagName == "INPUT")
            return;

        var keyCode;
        if (Sys.Browser.agent == Sys.Browser.Firefox) // Firefox
        {
            keyCode = e.which;
        }
        else {
            keyCode = e.keyCode;
        }

        // Up key pressed
        if (keyCode == 38) {
            // If there's a sibling row above, select it.
            if (this._selectedIndex > 0) {
                var newIndex = this._selectedIndex - 1;
                this._raiseSelectedIndexChange(e, { sender: this, value: this.get_dataKey(newIndex), index: newIndex });

                var scrollPanel = (this.get_element()).offsetParent;
                var selectedRow = this.get_selectedRow();
                // if the newly selected row is not visible, scroll so it will be visible.
                if (scrollPanel.scrollTop > selectedRow.offsetTop - this._headerRow.offsetHeight)
                    scrollPanel.scrollTop = selectedRow.offsetTop - this._headerRow.offsetHeight;
                // Don't bubble up the event because this event handled the scroll
                return false;
            }
        }

        // Down key pressed
        if (keyCode == 40) {
            // If there's a sibling row below, select it.
            if (this._selectedIndex < this._tableRows.length - 1) {
                var newIndex = this._selectedIndex + 1;
                this._raiseSelectedIndexChange(e, { sender: this, value: this.get_dataKey(newIndex), index: newIndex });

                var scrollPanel = (this.get_element()).offsetParent;
                var selectedRow = this.get_selectedRow();
                // if the newly selected row is not visible, scroll so it will be visible.
                if (scrollPanel.scrollTop < selectedRow.offsetTop - scrollPanel.clientHeight + selectedRow.offsetHeight)
                    scrollPanel.scrollTop = selectedRow.offsetTop - scrollPanel.clientHeight + selectedRow.offsetHeight;
                // Don't bubble up the event because this event handled the scroll
                return false;
            }
        }
    },

    _clearOtherMouseHandlers: function () {
        if (this._mouseUpHandler != null) {
            $removeHandler(this.get_element(), 'mouseup', this._mouseUpHandler);
            delete this._mouseUpHandler;
        }

        if (this._documentMouseMoveHandler != null) {
            $removeHandler(document, 'mousemove', this._documentMouseMoveHandler);
            delete this._documentMouseMoveHandler;
        }

        if (this._documentMouseUpHandler != null) {
            $removeHandler(document, 'mouseup', this._documentMouseUpHandler);
            delete this._documentMouseUpHandler;
        }
    },

    _clearHeaderHandlers: function () {
        for (var i = 0; i < this._headers.length; i++) {
            $removeHandler(this._headers[i], 'mousedown', this._dragHandlers[i]);
            delete this._dragHandlers[i];
        }

        this._headers = new Array();
        this._dragHandlers = new Array();
    },

    _clearLinkHandlers: function () {
        for (var i = 0; i < this._links.length; i++) {
            $removeHandler(this._links[i], 'click', this._linkHandlers[i]);
            delete this._linkHandlers[i];
        }

        this._links = new Array();
        this._linkHandlers = new Array();
    },

    _clearKeyDownHandlers: function () {
        for (var i = 0; i < this._keyDownElements.length; i++) {
            $removeHandler(this._keyDownElements[i], 'keydown', this._keyDownHandlers[i]);
            delete this._keyDownHandlers[i];
        }

        this._keyDownElements = new Array();
        this._keyDownHandlers = new Array();
    },

    _clearTBodyHandlers: function () {
        if (this._tbody) {
            if (this._tbodyDblClickHandler) {
                $removeHandler(this._tbody, 'dblclick', this._tbodyDblClickHandler);
                delete this._tbodyDblClickHandler;
            }

            if (this._tbodyRightClickHandler) {
                $removeHandler(this._tbody, 'contextmenu', this._tbodyRightClickHandler);
                delete this._tbodyRightClickHandler;
            }
        }
    },

    _clearTableContainerHandlers: function () {
        if (this._tableContainerScrollHandler) {
            $removeHandler(this._tableContainer, 'scroll', this._tableContainerScrollHandler);
            delete this._tableContainerScrollHandler;
        }
    },

    _clearDocumentHandlers: function () {
        if (this._documentClickHandler) {
            $removeHandler(document, 'click', this._documentClickHandler);
            delete this._documentClickHandler;
        }
    },

    _clearFilters: function () {
        // Delete filter lists first
        this._clearFilterLists();

        this._filterDivs = new Object();
        this._filterDivClickHandlers = new Object();
        this._filterDivScrollHandlers = new Object();
        this._filterListLoadAllHandlers = new Object();
        this._filterTextKeyDownHandlers = new Object();
        this._filterCheckBoxHandlers = new Object();
        this._filter = new Object();
        if (this._unfilteredDataSource != null) {
            this._dataSource = this._unfilteredDataSource;
            this._unfilteredDataSource = null;
        }
    },

    _clearFilterLists: function (exceptColumn) {
        // Remove the event handlers from each filter then remove the DOM object
        for (var prop in this._filterDivs) {
            if (prop != exceptColumn) {
                var filterDiv = this._filterDivs[prop];
                $removeHandler(filterDiv, 'click', this._filterDivClickHandlers[prop]);
                delete this._filterDivClickHandlers[prop];
                if (this._filterDivScrollHandlers[prop]) {
                    $removeHandler(filterDiv, 'scroll', this._filterDivScrollHandlers[prop]);
                    delete this._filterDivScrollHandlers[prop];
                }

                if (this._filterListLoadAllHandlers[prop]) {
                    if (filterDiv.loadAllLink) {
                        $removeHandler(filterDiv.loadAllLink, 'click', this._filterListLoadAllHandlers[prop]);
                    }
                    delete this._filterListLoadAllHandlers[prop];
                }

                if (this._filterTextKeyDownHandlers[prop]) {
                    if (filterDiv.filterText) {
                        $removeHandler(filterDiv.filterText, 'keydown', this._filterTextKeyDownHandlers[prop]);
                    }
                    delete this._filterTextKeyDownHandlers[prop];
                }

                if (this._filterCheckBoxHandlers[prop]) {
                    if (filterDiv.filterCheckBoxes) {
                        for (var i = 0; i < filterDiv.filterCheckBoxes.length; i++)
                            $removeHandler(filterDiv.filterCheckBoxes[i], 'click', this._filterCheckBoxHandlers[prop]);
                    }
                    delete this._filterCheckBoxHandlers[prop];
                }

                // Clean expando properties first to break circular references
                filterDiv.fillingNow = null;
                filterDiv.filterArray = null;
                filterDiv.loadAllLink = null;
                filterDiv.selectedItem = null;
                filterDiv.filterText = null;
                filterDiv.filterCheckBoxes = null;
                filterDiv.parentNode.removeChild(filterDiv);
                delete this._filterDivs[prop];
            }
        }
    },

    // Helper function to get the data key from the passed data object
    _getDataKey: function (dataObj) {
        var keyValue;
        try {
            var keys = this._dataKeyNames;
            for (var i = 0; i < keys.length; i++)
                keyValue = (keyValue ? (keyValue + ",") : "") + dataObj[keys[i]];
        }
        catch (e) {
            keyValue = null;
        }
        return keyValue;
    },

    _onDocumentMouseMove: function (e) {
        //This is the second method of Dragging, it is also fired event we are not in dragging

        if (this._isInDrag) {
            //First get the body element of this page, it is required to calulate the
            //position
            var body = document.getElementsByTagName('body')[0];

            this._posX = (e.clientX + body.scrollLeft);
            this._posY = (e.clientY + body.scrollTop);

            //We are in drag so create the visual clue
            if (this._draggingTable == null) {
                this._createVisualClue();
            }

            //Reposition the visual clue according to mouse position
            this._draggingTable.style.top = (this._posY + 1) + 'px';
            this._draggingTable.style.left = (this._posX + 1) + 'px';

            //This will make sure the content is not selected when we are dragging
            e.preventDefault();
        }
    },

    _onOtherMouseUp: function (e) {
        //This is last method of dragging which means the drop

        //No need to do anything if we are not in dragging
        if (!this._isInDrag) {
            return;
        }

        //Resolve the header, We will not allow to drop
        //if the dropping target does not exist in any of our headers
        var th = this._resolveHeader(e.target);

        if (th != null) {
            //We are dropping it our column so allow it

            //Header found, which means we are dropping in our header
            var newIndex = this._getHeaderIndex(th);

            //Only Drop if Column differs
            if (this._draggingColumnIndex != newIndex) {
                var tds;
                var td;
                var maxIndex = this._headerRow.childNodes.length

                //Now insert the column in proper order

                //First put the header
                tds = this._headerRow.childNodes;
                td = this._headerRow.removeChild(tds[this._draggingColumnIndex]);

                if ((newIndex >= maxIndex) || (newIndex + 1 >= maxIndex)) {
                    this._headerRow.appendChild(td);
                }
                else {
                    this._headerRow.insertBefore(td, tds[newIndex]);
                }

                //Now the Datarows
                for (var i = 0; i < this._tableRows.length; i++) {
                    tds = this._tableRows[i].childNodes;
                    td = this._tableRows[i].removeChild(tds[this._draggingColumnIndex]);

                    if (newIndex >= maxIndex || newIndex + 1 >= maxIndex) {
                        this._tableRows[i].appendChild(td);
                    }
                    else {
                        this._tableRows[i].insertBefore(td, tds[newIndex]);
                    }
                }

                //Now we have to modify the column collection so that
                //it can presist the order in future dataBind method
                var columnOldIndex = this.get_columnIndexFromHeaderIndex(this._draggingColumnIndex); //The Column index is the same as dragging column
                var columnNewIndex = this.get_columnIndexFromHeaderIndex(newIndex);

                var columns = this.get_columns();
                var column = columns[columnOldIndex]; //Get the target column

                if (Array.remove(columns, column)) // Now Remove it from the Old index
                {
                    Array.insert(columns, columnNewIndex, column); // And insert it in new index
                }

                this._raiseColumnDropped(column, columnOldIndex, columnNewIndex);
            }
        }

        //Dragg complete
        this._isInDrag = false;

        if (this._draggingTable != null) {
            //So Destry the visual clue
            document.getElementsByTagName('body')[0].removeChild(this._draggingTable);
            this._draggingTable = null;
        }
    },

    _onHeaderMouseDown: function (e) {
        //This is the first method of drag and drop

        //Only allow left mouse button drag
        if (Sys.Browser.agent != Sys.Browser.Safari) {
            if (e.button != Sys.UI.MouseButton.leftButton) {
                return;
            }
        }

        //Already dragging so exit
        if (this._isInDrag) {
            return;
        }

        //Need to resolve the header, it possible to start the dragging event with the sort link
        var th = this._resolveHeader(e.target);

        //the target element does not exists in any of our header
        if (th == null) {
            return;
        }

        //Flag that we are dragging
        this._isInDrag = true;
        //Store the index of dragging column
        this._draggingColumnIndex = this._getHeaderIndex(th);

        //Now Raise the DragStart event
        var columnIndex = this.get_columnIndexFromHeaderIndex(this._draggingColumnIndex); //The Column index is the same as dragging column

        this._raiseColumnDragStart(this.get_columns()[columnIndex]); // Now raise the drag start event.
    },

    _resolveHeader: function (element) {
        var columns = this.get_columns();
        var i = 0;

        for (i = 0; i < columns.length; i++) {
            if (columns[i].$header == element) {
                return element;
            }
        }

        //Now traverse to top to check if the element is a children of any of the column header.
        var parentNode = element.parentNode;

        while (parentNode != null) {
            for (i = 0; i < columns.length; i++) {
                if (columns[i].$header == parentNode) {
                    return parentNode;
                }
            }

            parentNode = parentNode.parentNode;
        }

        return null;
    },

    _createVisualClue: function () {
        //We create a table which will contain a single column of the 
        //dragging column rows
        this._draggingTable = document.createElement('table');

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var td = document.createElement('td');

        this._copyAttributes(this._headerRow, tr);

        td.innerHTML = this._headerRow.childNodes[this._draggingColumnIndex].innerHTML;
        this._copyAttributes(this._headerRow.childNodes[this._draggingColumnIndex], td);

        tr.appendChild(td);
        thead.appendChild(tr);
        this._draggingTable.appendChild(thead);

        var tbody = document.createElement('tbody');

        for (var i = 0; i < this._tableRows.length; i++) {
            tr = document.createElement('tr');
            this._copyAttributes(this._tableRows[i], tr);

            td = document.createElement('td');

            td.innerHTML = this._tableRows[i].childNodes[this._draggingColumnIndex].innerHTML;
            this._copyAttributes(this._tableRows[i].childNodes[this._draggingColumnIndex], td);

            tr.appendChild(td);
            tbody.appendChild(tr);
        }

        this._draggingTable.appendChild(tbody);
        //Adding it in the body
        document.getElementsByTagName('body')[0].appendChild(this._draggingTable);

        //Put the same cellpadding and cellspacing of the control so that it look same
        this._draggingTable.cellPadding = this.get_element().cellPadding;
        this._draggingTable.cellSpacing = this.get_element().cellSpacing;

        //Create a tranparent effect
        this._draggingTable.style.filter = 'alpha(opacity=70)';
        this._draggingTable.style.opacity = '0.7'; // IE Only
        this._draggingTable.style.mozOpacity = '0.7'; //FireFox only
        this._draggingTable.style.border = '1px dashed #cccccc'; // Create a dashed border arround the visual clue

        //Make width of the table same as the column width
        this._draggingTable.style.width = this._headerRow.childNodes[this._draggingColumnIndex].clientWidth + 'px';
        this._draggingTable.style.position = 'absolute'; // Setting it as absolute otherwise position will not work
        //Setting x,y coordition which we found in the mouse move event
        this._draggingTable.style.top = (this._posY + 1) + 'px'; //Adding with some extra buffer
        this._draggingTable.style.left = (this._posX + 1) + 'px';
    },

    _getHeaderIndex: function (th) {
        //Since Safari does not support cellIndex we have do it old way
        if (Sys.Browser.agent == Sys.Browser.Safari) {
            for (var i = 0; i < this._headerRow.childNodes.length; i++) {
                if (this._headerRow.childNodes[i] == th) {
                    return i;
                }
            }

            return -1;
        }
        else {
            return th.cellIndex;
        }
    },

    _copyAttributes: function (sourceNode, targetNode) {
        if (Sys.Browser.agent == Sys.Browser.InternetExplorer) {
            targetNode.mergeAttributes(sourceNode); //Only IE supports it
        }
        else {
            var attributes = sourceNode.attributes;

            if ((attributes != null) && (attributes.length > 0)) {
                for (var i = 0; i < attributes.length; i++) {
                    targetNode.setAttribute(attributes[i].nodeName, attributes[i].nodeValue);
                }
            }
        }
    },

    _setText: function (element, text) {
        if (typeof element.innerText != 'undefined') // Only ie supports it
        {
            element.innerText = text;
        }
        else if (typeof element.textContent != 'undefined') //Mozila
        {
            element.textContent = text;
        }
    },

    _clearContent: function (element) {
        if (element.firstChild) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    },

    // Return the deep copy of the object
    _cloneObject: function (obj) {
        var copyObj = new Object();
        for (var prop in obj) {
            if (typeof obj[prop] == 'object' && obj[prop] != null)
                copyObj[prop] = this._cloneObject(obj[prop]);
            else
                copyObj[prop] = obj[prop];
        }
        return copyObj;
    },

    _unFormat: function (format, value) {
        if (value == null)
            return value;

        switch (format.substring(0, 1).toLowerCase()) {
            case "c":
                if (value == "")
                    return null;
                // Strip commas
                value = value.replace(/\,+/g, "");
                // Strip $ sign
                value = value.replace(/\$+/, "");
                // Convert (xx) to -xx
                var matchArray = value.match(/^\((.+)\)$/);
                if (matchArray)
                    value = "-" + matchArray[1];
                value = parseFloat(value);
                if (isNaN(value))
                    throw Error.invalidOperation("Error converting currency")
                break;
        }
        return value;
    }
}

Ajax.Controls.Grid.registerClass('Ajax.Controls.Grid', Sys.UI.Control);

//*** BEGIN Prototype 1.4.0 SUBSET ***//
Function.prototype.bind = function() {
  var __method = this, args = $A(arguments), object = args.shift();
  return function() {
    return __method.apply(object, args.concat($A(arguments)));
  }
}

var $A = Array.from = function(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  } else {
    var results = [];
    for (var i = 0; i < iterable.length; i++)
      results.push(iterable[i]);
    return results;
  }
}
//*** END Prototype 1.4.0 SUBSET ***//

// Add filter method to Array object if not supported
if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }

    return res;
  };
}

if (typeof(Sys) != 'undefined')
{
    Sys.Application.notifyScriptLoaded();
}