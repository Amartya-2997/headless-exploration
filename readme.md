
> I have a data pipeline problem. I am ingesting data from a SQL source table into a Delta Lake table using Python. I want to use the **delta-rs (`deltalake`) library** along with **Polars**.
>
> My requirements:
>
> 1. The **Delta table** should be created the first time with a *full snapshot* (SOD = start of day load).
> 2. Every 5 minutes, I will pull **incremental rows** (based on an auto-increment ID) and I want to **upsert** them into the Delta table using the `MERGE` capability, keyed on a column called `mlpid`.
> 3. Each batch should include **metadata columns**:
>
>    * `ingest_ts` = current UTC timestamp at load
>    * `batch_minute` = `ingest_ts` truncated to the nearest minute
>    * `is_sod` = boolean flag (`true` for the full snapshot, `false` otherwise)
> 4. Show me Python code with Polars DataFrames and `deltalake` APIs that covers:
>
>    * Creating the Delta table from the initial SOD batch
>    * Running an incremental upsert with `MERGE`
>    * Reading the table into Polars
>    * Using **time travel** (`version as of` or `timestamp as of`) to query the state of the table at a given time
>
> Please make the code runnable end-to-end, with small sample DataFrames for illustration.
