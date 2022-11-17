use anchor_lang::prelude::*;

declare_id!("CV1NQVxvK8hPpETZSppN22omurA9RxDoRsv5adrnZdcZ");

#[program]
pub mod ppbike {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
